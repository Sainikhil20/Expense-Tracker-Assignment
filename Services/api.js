import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchExpenses = () => API.get('/expenses');
export const createExpense = (expense) => API.post('/expenses', expense);
export const updateExpense = (id, expense) => API.put(`/expenses/${id}`, expense);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);
