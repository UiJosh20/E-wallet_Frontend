import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });

export const fetchTransactions = () => API.get("TransactionData/");
export const fetchAccounts = () => API.get("accounts/");
export const fetchQRTransactions = () => API.get("qr-transactions/");
