// src/app/dashboard/page.tsx
'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { TransactionInput } from '@/components/dashboard/TransactionInput';
import { FinancialSummary } from '@/components/dashboard/FinancialSummary';
import { BalanceChart } from '@/components/dashboard/BalanceChart';
import { CreditCardWidget, CategorySummary } from '@/components/dashboard/SidebarWidgets';

export default function DashboardPage() {
    return (
      <MainLayout>
        <div className="bg-gray-50 dark:bg-gray-900">
          <TransactionInput />
          <FinancialSummary />
          
          {/* Visualization Area */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <BalanceChart />
                </div>
                <div className="space-y-6">
                  <CreditCardWidget />
                  <CategorySummary />
                </div>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    );
  }