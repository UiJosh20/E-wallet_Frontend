import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  const [timeframe, setTimeframe] = useState("Month");

  const dataOptions = {
    Month: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Income",
          data: [5000, 4000, 6000, 7000, 5500],
          backgroundColor: "#547ee8",
        },
        {
          label: "Expenses",
          data: [3000, 2500, 4000, 3000, 3500],
          backgroundColor: "#f38d43",
        },
      ],
    },
    Weeks: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Income",
          data: [2000, 1500, 1800, 2200],
          backgroundColor: "#547ee8",
        },
        {
          label: "Expenses",
          data: [1200, 1000, 1500, 1100],
          backgroundColor: "#f38d43",
        },
      ],
    },
    Days: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Income",
          data: [500, 400, 600, 700, 550],
          backgroundColor: "#547ee8",
        },
        {
          label: "Expenses",
          data: [300, 250, 400, 300, 350],
          backgroundColor: "#f38d43",
        },
      ],
    },
  };

  const handleChange = (event) => {
    setTimeframe(event.target.value);
  };

  const data = dataOptions[timeframe];

  // Calculate total income and total expenses
  const totalIncome = data.datasets[0].data.reduce(
    (sum, value) => sum + value,
    0
  );
  const totalExpenses = data.datasets[1].data.reduce(
    (sum, value) => sum + value,
    0
  );

  const options = {
    responsive: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm">Overview</h2>
        <div className="mb-4 flex justify-center">
          <select
            value={timeframe}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-2 focus:outline-none"
          >
            <option value="Month">Month</option>
            <option value="Weeks">Weeks</option>
            <option value="Days">Days</option>
          </select>
        </div>
      </div>
      <Bar data={data} options={options} height={220} />

      <div className="flex justify-between mt-12 gap-4">
        {/* Total Income Card */}
        <div className="border rounded-lg p-3 w-[47%] bg-gradient-to-t from-blue-400 to-[#547ee8]">
          <svg
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12m5.72-1.53 3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.19a.75.75 0 0 1-1.5 0V9.31l-2.22 2.22a.75.75 0 0 1-1.06-1.06" />
          </svg>
          <div className="mt-10">
            <h3 className="font-extralight text-sm text-white">Total Income</h3>
            <p className="text-white text-sm font-semibold">${totalIncome}</p>
          </div>
        </div>

        {/* Total Expenses Card */}
        <div className="border rounded-lg p-4 w-[45%] bg-gradient-to-r to-orange-300 from-[#f38d43]">
          <svg
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12M12 6.75a.75.75 0 0 1 .75.75v7.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V7.5a.75.75 0 0 1 .75-.75" />
          </svg>
          <div className="mt-10">
            <h3 className="font-extralight text-sm text-white">
              Total Expenses
            </h3>
            <p className="text-white text-sm font-semibold">${totalExpenses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
