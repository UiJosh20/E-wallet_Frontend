import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../../../api";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetchTransactions();
      setHistory(response.data.recent_activities);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false); // Stop loading once the API call is complete
    }
  };

  return (
    <main>
      <div className="flex justify-between items-center mt-5 mb-3">
        <p className="font-semibold text-md">Recent Activities</p>
        <p className="text-blue-500 text-sm cursor-pointer">View All</p>
      </div>

      {loading ? (
        // Show loader while data is being fetched
        <div className="flex justify-center items-center mt-10">
          <div className="loader animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : history.length > 0 ? (
        // Show data once loaded
        <div className="space-y-4">
          {history.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-100 rounded-lg p-4 shadow-sm"
            >
              {/* Left Section - Icon and Title */}
              <div className="flex items-center">
                <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full">
                  <img src={item.icon} alt="icon" className="object-contain" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.time}</p>
                </div>
              </div>

              {/* Right Section - Amount */}
              <div>
                <p
                  className={`font-semibold text-sm ${
                    item.amount < 50 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.amount < 50
                    ? `-USD ${Math.abs(item.amount)}`
                    : `+USD ${item.amount}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show a message if there are no activities
        <p className="text-center text-gray-500 mt-5">
          No recent activities found.
        </p>
      )}
    </main>
  );
};

export default History;
