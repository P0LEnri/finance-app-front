import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', balance: 4000 },
  { name: 'Mar', balance: 3000 },
  { name: 'Mie', balance: 2000 },
  { name: 'Jue', balance: 2780 },
  { name: 'Vie', balance: 1890 },
  { name: 'Sab', balance: 2390 },
  { name: 'Dom', balance: 3490 },
];

export function BalanceChart() {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Balance Semanal</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
          <XAxis 
            dataKey="name"
            stroke="currentColor"
            className="text-gray-600 dark:text-gray-400"
          />
          <YAxis
            stroke="currentColor"
            className="text-gray-600 dark:text-gray-400"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgb(255 255 255 / 0.9)',
              border: '1px solid rgb(203 213 225)',
              borderRadius: '0.5rem',
            }}
          />
          <Area 
            type="monotone" 
            dataKey="balance" 
            stroke="#0ea5e9" 
            fill="#0ea5e9" 
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}