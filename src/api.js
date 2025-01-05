import axios from "axios";

const API = axios.create({
  baseURL: "https://e-wallet-backend-1.onrender.com/api/",
});

export const fetchTransactions = () => API.get("TransactionData/");
export const fetchAccounts = () => API.get("accounts/");
export const fetchQRTransactions = () => API.get("qr-transactions/");
