import React, { useState, useEffect } from 'react';

const Filter = () => {
    const [dummyData, setDummyData] = useState([]);
    const [years, setYears] = useState([]);
    const [months, setMonths] = useState([]);
    const [selectedYear, setSelectedYear] = useState('2016');
    const [selectedMonth, setSelectedMonth] = useState('07');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/plot');
          const data = await response.json();
          console.log('Fetched Data:', data);
          setDummyData(data);
          const uniqueYears = Array.from(new Set(data.map(entry => entry.timestamp.slice(0, 4))));
          setYears(uniqueYears);
  
          const monthsForSelectedYear = Array.from(new Set(
            data.filter(entry => entry.timestamp.startsWith(selectedYear))
                .map(entry => entry.timestamp.slice(5, 7))
          ));
          setMonths(monthsForSelectedYear.sort());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [selectedYear,selectedMonth]); 
  
    const filteredData = dummyData.filter(
      (entry) =>
        entry.timestamp.startsWith(selectedYear) && entry.timestamp.slice(5, 7) === selectedMonth
    );
  
    return (
      <div>
        <label htmlFor="year">Select Year:</label>
        <select id="year" onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
  
        <label htmlFor="month">Select Month:</label>
        <select
          id="month"
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
  

      </div>
    );
  };
  
  
export default Filter