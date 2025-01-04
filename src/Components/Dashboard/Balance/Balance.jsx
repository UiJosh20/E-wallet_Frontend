import React, { useEffect, useState } from 'react'
import { fetchTransactions } from '../../../api';

const Balance = () => {
     const [balance, setBalance] = useState(0);
      const [isVisible, setIsVisible] = useState(true);
    
      
    
      useEffect(() => {
        fetchBalance();
      }, []);
    
      const fetchBalance = async () => {
        const response = await fetchTransactions();
        setBalance(response.data.balance);
      };

        const toggleVisibility = () => {
          setIsVisible(!isVisible);
        };
  return (
    <div className="py-5 flex justify-between items-center">
      <div className="flex gap-5  items-center">
        <div>
          <h3>Total Balance</h3>
          {/* Format balance with commas */}
          <p className="font-bold">
            {isVisible ? `$ ${balance.toLocaleString()}` : "****"}
          </p>
        </div>
        <button onClick={toggleVisibility}>
          {isVisible ? (
            <i className="fas fa-eye"></i>
          ) : (
            <i className="fas fa-eye-slash"></i>
          )}
        </button>
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
