import { useState, useEffect } from 'react';

const ExpenseForm = ({ onSubmit, editingExpense }) => {
  const [form, setForm] = useState({ amount: '', category: '', description: '', date: '' });

  useEffect(() => {
    if (editingExpense) {
      setForm(editingExpense);
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ amount: '', category: '', description: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" className="m-2 p-2 border rounded" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="m-2 p-2 border rounded" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="m-2 p-2 border rounded" />
      <input name="date" value={form.date} onChange={handleChange} type="date" className="m-2 p-2 border rounded" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingExpense ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ExpenseForm;
