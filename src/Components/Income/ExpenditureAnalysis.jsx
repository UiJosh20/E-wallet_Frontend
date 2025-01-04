import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const ExpenditureAnalysis = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then(({ data }) => setTransactions(data));
  }, []);

  const data = transactions.map((t) => ({
    type: t.transaction_type,
    amount: t.amount,
  }));

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="type" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
};

export default ExpenditureAnalysis;
