import { Card } from "@/components/ui/card";
import { Wallet, ArrowUp, ArrowDown } from 'lucide-react';
import { ReactNode } from 'react';

interface SummaryCardProps {
    icon: ReactNode;
    title: string;
    amount: string | number;
    subtitle: string;
    amountColor?: string;
    subtitleColor?: string;
  }

export function FinancialSummary() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SummaryCard
            icon={<Wallet className="h-10 w-10 text-primary-500" />}
            title="Balance Total"
            amount="$10,500.00"
            subtitle="+5% vs. mes anterior"
            subtitleColor="text-success-500"
          />
          <SummaryCard
            icon={<ArrowUp className="h-10 w-10 text-success-500" />}
            title="Ingresos del Mes"
            amount="$5,000.00"
            subtitle="10 transacciones"
            amountColor="text-success-500"
          />
          <SummaryCard
            icon={<ArrowDown className="h-10 w-10 text-error-500" />}
            title="Gastos del Mes"
            amount="$3,500.00"
            subtitle="25 transacciones"
            amountColor="text-error-500"
          />
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ 
  icon, 
  title, 
  amount, 
  subtitle, 
  amountColor = "text-gray-900 dark:text-white",
  subtitleColor = "text-gray-500 dark:text-gray-400" 
}:SummaryCardProps) {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <div className="mr-4">{icon}</div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">{title}</p>
          <p className={`text-3xl font-bold ${amountColor}`}>{amount}</p>
          <p className={subtitleColor}>{subtitle}</p>
        </div>
      </div>
    </Card>
  );
}