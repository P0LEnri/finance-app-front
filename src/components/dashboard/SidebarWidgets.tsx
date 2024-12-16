import { Card } from "@/components/ui/card";
import { CreditCard } from 'lucide-react';

export function CreditCardWidget() {
  return (
    <Card className="p-6 mb-6 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="flex items-center mb-4">
        <CreditCard className="h-8 w-8 mr-2" />
        <h2 className="text-xl font-bold">Tarjeta Principal</h2>
      </div>
      <p className="text-2xl font-bold mb-2">$2,500.00</p>
      <p className="text-primary-100">Próximo pago: 15/07/2023</p>
    </Card>
  );
}

export function CategorySummary() {
  const categories = [
    { name: 'Alimentación', amount: 1000, percentage: 100 },
    { name: 'Transporte', amount: 800, percentage: 80 },
    { name: 'Entretenimiento', amount: 600, percentage: 60 },
    { name: 'Servicios', amount: 400, percentage: 40 },
  ];

  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Resumen Categorías
      </h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
              <span className="text-gray-900 dark:text-white font-medium">
                ${category.amount.toFixed(2)}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-primary-600 h-2.5 rounded-full" 
                style={{ width: `${category.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}