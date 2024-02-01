import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Chart1 = () => {
  const [dummyData, setDummyData] = useState([]);
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/plot");
        const data = await response.json();
        setDummyData(data);

        const uniqueYears = Array.from(
          new Set(data.map((entry) => entry.timestamp.slice(0, 4)))
        );
        setYears(uniqueYears);

        setSelectedYear(selectedYear || "2016");

        const monthsForSelectedYear = Array.from(
          new Set(
            data
              .filter((entry) => entry.timestamp.startsWith(selectedYear))
              .map((entry) => entry.timestamp.slice(5, 7))
          )
        );
        setMonths(monthsForSelectedYear.sort());

        setSelectedMonth(
          selectedMonth || "07"
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedYear,selectedMonth]);

  useEffect(() => {
    setFilteredData(
      dummyData.filter(
        (entry) =>
          entry.timestamp.startsWith(selectedYear) &&
          entry.timestamp.slice(5, 7) === selectedMonth
      )
    );
  }, [dummyData, selectedYear, selectedMonth]);

  const uniqueDays = Array.from(
    new Set(filteredData.map((entry) => entry.timestamp.slice(8, 10)))
  );

  const chartData = {
    options: {
      chart: {
        type: "area",
        background: "transparent", 
        foreColor: "#333",
        toolbar: {
          show: false, 
        },
      },
      xaxis: {
        categories: uniqueDays,
        title: {
          text: "Days of the Month",
        },
      },
      yaxis: {
        title: {
          text: "Profit",
        },
      },
      fill: {
        type: "gradient", 
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#ffffff", "#007BFF"], 
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        dashArray: 5,
        width: 2,
        colors: ["#007BFF"], 
      },
    },
    series: [
      {
        name: "Profit",
        data: uniqueDays.map((day) => {
          const entriesForDay = filteredData.filter(
            (entry) => entry.timestamp.slice(8, 10) === day
          );
          const averageProfit =
            entriesForDay.reduce(
              (sum, entry) => sum + entry.profitPercentage,
              0
            ) / entriesForDay.length;

          return entriesForDay.length > 0
            ? parseFloat(averageProfit.toFixed(2))
            : null; 
        }),
      },
    ],
  };

  return (
    <div className="h-[100px] p-2">
    <div className=" flex flex-row gap-4 items-center  justify-between">
    <div className="text-black text-lg font-semibold ">Growth</div>
    <div className="flex flex-row gap-4 items-center">
      <div className="text-[#555555] !text-sm">
      <select
        id="year"
        onChange={(e) => setSelectedYear(e.target.value)}
        value={selectedYear}
        className="text-xs border-none"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
    <div className="text-[#555555] text-sm">
      <select
        id="month"
        onChange={(e) => setSelectedMonth(e.target.value)}
        value={selectedMonth}
        className="text-xs border-none"
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
    </div>
    </div>

      <div style={{ width: "100%"}}>
        <Chart
          options={{
            ...chartData.options,
            markers: {
              size: 0,
            },
          }}
          series={chartData.series}
          type="area"
          height={200}
        />
      </div>
    </div>
  );
};
export default Chart1;
