import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../../../api";

const UserSavingsPlan = () => {
  const [savingInfo, setSavingInfo] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    fetchSavings();
  }, []);

  const fetchSavings = async () => {
    try {
      const response = await fetchTransactions();
      setSavingInfo(response.data.savings);
    } catch (error) {
      console.error("Error fetching savings plan:", error);
    } finally {
      setLoading(false); // Stop loading after API call
    }
  };

  return (
    <>
      <div className="flex justify-between mt-5 items-center w-full">
        <p className="font-semibold text-md">Savings Plan</p>
        <p className="text-blue-500 text-sm cursor-pointer">View all</p>
      </div>

      {loading ? (
        // Loader while fetching data
        <div className="flex justify-center items-center mt-10">
          <div className="loader3 animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : savingInfo.length > 0 ? (
        // Render savings plan items
        <div className="flex overflow-x-auto gap-5 mt-5 w-82">
          {savingInfo.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 flex-shrink-0 rounded-lg shadow-sm p-2"
              style={{
                width: "300px",
                height: "100px",
                flexBasis: "200px",
              }}
            >
              {/* Icon Section */}
              <div className="h-full flex flex-col justify-center items-center">
                <div className="mb-2">
                  <img src={item.icon} alt="icon" className="object-contain" />
                </div>
                <p className="text-center font-semibold text-sm">{item.name}</p>
                <small>{item.amount}</small>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Fallback message for no savings data
        <p className="text-center text-gray-500 mt-5">
          No savings plans available.
        </p>
      )}
    </>
  );
};

export default UserSavingsPlan;
