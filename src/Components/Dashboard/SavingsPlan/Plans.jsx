import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../../../api";

const Plans = () => {
  const [savingInfo, setSavingInfo] = useState([]);

  useEffect(() => {
    fetchTransactions().then((res) => {
      setSavingInfo(res.data.savings);
    });
  }, []);

  return (
    <>
      <div className="flex justify-between mt-5 items-center w-full">
        <p className="font-semibold text-md">Savings Plan</p>
        <p className="text-blue-500 text-sm cursor-pointer">View all</p>
      </div>

      <div className="flex overflow-x-auto gap-5 mt-5 w-82">
        {savingInfo.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 flex-shrink-0 rounded-lg shadow-sm p-2"
            style={{
              width: "300px", // Make the width and height equal for a square shape
              height: "100px",
              flexBasis: "200px", // Ensure the square size is consistent in the flex container
            }}
          >
            {/* Icon Section */}
            <div className="h-full flex flex-col justify-center items-center">
              <div className="mb-2">
                {/* Replace with actual item.icon if available */}
                <img
                  src={item.icon}
                  alt="icon"
                  className=" object-contain"
                />
              </div>
              <p className="text-center font-semibold text-sm">{item.name}</p>
              <small>
               {item.amount}
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plans;
