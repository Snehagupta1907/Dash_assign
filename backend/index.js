import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import csv from 'csv-parser';
import fs from 'fs';
import { downsampleTimeSeries } from './utils/downsampling.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const originalData = [];

fs.createReadStream('time_data.csv')
  .pipe(csv())
  .on('data', (row) => {
    const dataPoint = {
      timestamp: row['Timestamp'],
      profitPercentage: parseFloat(row['Profit Percentage']),
    };
    originalData.push(dataPoint);
  })
  .on('end', () => {
    console.log('Original data loaded');
  });

  app.get('/',(req,res)=>{
    res.json("hello");
  })

  app.get('/plot', (req, res) => {
    const { timestamps, profitPercentages } = downsampleTimeSeries(
        originalData.map((item) => item.timestamp),
        originalData.map((item) => item.profitPercentage),
        3000
    );

    // console.log(`Downsampled data length: ${timestamps.length}`);

    const downsampledData = timestamps.map((timestamp, index) => ({
        timestamp,
        profitPercentage: profitPercentages[index],
    }));
    res.json(downsampledData);
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});