import React, { useEffect, useState } from "react";
import { fetchAccounts } from "../../api";

const LinkedAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts().then(({ data }) => setAccounts(data));
  }, []);

  return (
    <div>
      <h2>Linked Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - Balance: #{account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkedAccounts;
