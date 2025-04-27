import { useEffect, useState } from 'react';
import { fetchExpenses, createExpense, updateExpense, deleteExpense } from './Services/api';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const res = await fetchExpenses();
    setExpenses(res.data);
  };

  const handleAddOrEdit = async (expense) => {
    if (editingExpense) {
      await updateExpense(editingExpense._id, expense);
      setEditingExpense(null);
    } else {
      await createExpense(expense);
    }
    loadExpenses();
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl text-center mb-6 font-bold">Expense Tracker</h1>
      <ExpenseForm onSubmit={handleAddOrEdit} editingExpense={editingExpense} />
      <ExpenseList expenses={expenses} onDelete={handleDelete} onEdit={setEditingExpense} />
      <Dashboard expenses={expenses} />
    </div>
  );
}

export default App;
