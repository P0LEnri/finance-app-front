'use client';
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const placeholders = [
  "Pagué $50 en el supermercado",
  "Recibí $1000 de salario",
  "Transferí $200 a mi cuenta de ahorros"
];

export function TransactionInput() {
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [input, setInput] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % placeholders.length;
      setPlaceholder(placeholders[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-surface-light dark:bg-surface-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <Input 
            className="w-full h-16 text-lg pl-4 pr-32 rounded-lg shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button 
            className="absolute right-2 top-2 h-12 px-8 bg-primary-600 hover:bg-primary-700 text-white"
            onClick={() => console.log('Registrar:', input)}
          >
            Registrar
          </Button>
        </div>
        {input && (
          <Card className="mt-4 p-4 border-success-500/20 bg-success-50/50 dark:bg-success-900/20">
            <p className="text-success-700 dark:text-success-400 font-semibold">Ingreso detectado</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$1000.00</p>
            <p className="text-gray-600 dark:text-gray-400">Categoría sugerida: Salario</p>
          </Card>
        )}
      </div>
    </section>
  );
}