import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../../api";
import card from "../../assets/card.png"
import budgetimg from "../../assets/arcticons_budgetwatch.png";
import transfer from "../../assets/Vector.png";
import send from "../../assets/material-symbols_add.png";
const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);
  

  useEffect(() => {
    fetchBalance();
    fetchHistory();
  }, []);

  const fetchBalance = async () => {
    const response = await fetchTransactions();
    setBalance(response.data.balance);
  };

  const fetchHistory = async () => {
    const response = await fetchTransactions();
    setHistory(response.data.recent_activities);
  }

  return (
    <>
      <section className=" h-[900px] bg-white w-full pt-2 px-4 overflow-y-auto">
        {/* balance */}
        <div className="py-5 flex justify-between items-center">
          <div className="flex gap-5">
            <div>
              <h3>Total Balance</h3>
              {/* Format balance with commas */}
              <p className="font-bold">$ {balance.toLocaleString()}</p>
            </div>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.55 13.406c-.272-.373-.408-.56-.502-.92a2.5 2.5 0 0 1 0-.971c.094-.361.23-.548.502-.92C4.039 8.55 7.303 5 12 5s7.961 3.55 9.45 5.594c.272.373.408.56.502.92a2.5 2.5 0 0 1 0 .971c-.094.361-.23.548-.502.92C19.961 15.45 16.697 19 12 19s-7.961-3.55-9.45-5.594" />
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            </svg>
          </div>

          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4" />
          </svg>
        </div>

        {/* card */}
        <div className="w-full">
          <img src={card} />
        </div>

        {/* transaction button */}
        <div className="my-3 flex justify-between items-center">
          <button className="bg-[#547ee8] p-2 rounded-full text-white flex items-center">
            <img src={send} alt="" />
            <small className="ml-2">Add money</small>
          </button>
          <button className="bg-[#547ee8] p-2 rounded-full text-white flex items-center">
            <img src={transfer} alt="" />
            <small className="ml-2">Transfer</small>
          </button>

          <button className="bg-[#547ee8] p-2 rounded-full text-white flex items-center">
            <img src={budgetimg} alt="" />
            <small className="ml-2">Budget</small>
          </button>
        </div>

        {/* Transaction History */}

        <main>
          <div className="flex justify-between items-center mt-5 mb-3">
            <p className="font-semibold text-lg">Recent Activities</p>
            <p className="text-blue-500 text-sm cursor-pointer">View All</p>
          </div>
          <div className="space-y-4">
            {history.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-gray-100 rounded-lg p-4 shadow-sm"
              >
                {/* Left Section - Icon and Title */}
                <div className="flex items-center">
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full">
                    {/* Replace with actual item.icon if available */}
                    <img
                      src={item.icon}
                      alt="icon"
                      className=" object-contain"
                    />
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
        </main>
      </section>
    </>
  );
};

export default Dashboard;
