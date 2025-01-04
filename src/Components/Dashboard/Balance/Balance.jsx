import React, { useEffect, useState } from 'react'
import { fetchTransactions } from '../../../api';

const Balance = () => {
     const [balance, setBalance] = useState(0);
    
      
    
      useEffect(() => {
        fetchBalance();
      }, []);
    
      const fetchBalance = async () => {
        const response = await fetchTransactions();
        setBalance(response.data.balance);
      };
  return (
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
  );
}

export default Balance
