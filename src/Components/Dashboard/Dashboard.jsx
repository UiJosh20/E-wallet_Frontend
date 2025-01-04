import React, { useEffect, useState } from "react";

import card from "../../assets/card.png"
import budgetimg from "../../assets/arcticons_budgetwatch.png";
import transfer from "../../assets/Vector.png";
import send from "../../assets/material-symbols_add.png";
import History from "./TransactionHistory/History";
import Balance from "./Balance/Balance";
import Plans from "./SavingsPlan/plans";
const Dashboard = () => {
 


  return (
    <>
      <section className=" h-[900px] bg-white w-full pt-2 px-4 overflow-y-auto">
        {/* balance */}
       <Balance/>

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
        <History/>

        {/* Savings plan */}
        <Plans/>
       
      </section>
    </>
  );
};

export default Dashboard;
