import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../../api";
import AnalyticsChart from "./AnalyticsChart/AnalyticsChart";
import { Link } from "react-router-dom";

const Analysis = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    const response = await fetchTransactions();
    setBalance(response.data.balance);
  };

  return (
    <section className=" lg:h-[900px] h-[710px] bg-white w-full pt-2 px-4 overflow-y-auto">
      <div className="flex items-center">
        <Link to={"/"}>
          <i className="fas fa-chevron-left font-bold text-xl"></i>
        </Link>
        <p className="mx-auto text-xl">Statistics</p>
      </div>

      <div className="mt-3 text-sm font-light">
        <p>Total Balance</p>
        <p className="text-xl font-semibold">$ {balance.toLocaleString()}</p>
      </div>

      <div>
        <AnalyticsChart />
      </div>
    </section>
  );
};

export default Analysis;
