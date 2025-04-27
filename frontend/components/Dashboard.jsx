import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF'];

const Dashboard = ({ expenses }) => {
  const categoryData = [];
  const categoryMap = {};

  expenses.forEach(exp => {
    if (categoryMap[exp.category]) {
      categoryMap[exp.category] += exp.amount;
    } else {
      categoryMap[exp.category] = exp.amount;
    }
  });

  for (const key in categoryMap) {
    categoryData.push({ name: key, value: categoryMap[key] });
  }

  const monthlyData = [];
  const monthMap = {};

  expenses.forEach(exp => {
    const month = new Date(exp.date).toLocaleString('default', { month: 'short' });
    if (monthMap[month]) {
      monthMap[month] += exp.amount;
    } else {
      monthMap[month] = exp.amount;
    }
  });

  for (const key in monthMap) {
    monthlyData.push({ month: key, amount: monthMap[key] });
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl mb-4">Expense Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label>
              {categoryData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
