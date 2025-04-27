const ExpenseList = ({ expenses, onDelete, onEdit }) => {
    return (
      <div className="mt-4">
        {expenses.map((expense) => (
          <div key={expense._id} className="flex justify-between p-2 border-b">
            <div>
              <p><strong>{expense.category}</strong>: ${expense.amount}</p>
              <p>{expense.description}</p>
              <p>{new Date(expense.date).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => onEdit(expense)} className="bg-yellow-400 px-2 py-1 rounded">Edit</button>
              <button onClick={() => onDelete(expense._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ExpenseList;
  