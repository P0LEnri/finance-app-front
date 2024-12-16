import React from 'react';
import { ArrowRight, BadgeDollarSign, ChartBarIcon, Shield, Zap } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';

export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-surface-light to-background-light dark:from-gray-900 dark:to-background-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Control financiero <br />
            <span className="text-blue-600 dark:text-blue-400">simple y efectivo</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Toma el control de tus finanzas personales con una plataforma que hace el seguimiento de gastos tan natural como una conversación.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 group">
              Empezar ahora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
              Ver demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Todo lo que necesitas para tus finanzas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<BadgeDollarSign className="w-6 h-6" />}
              title="Control de Gastos"
              description="Registra tus gastos usando lenguaje natural. Tan fácil como escribir un mensaje."
            />
            <FeatureCard
              icon={<ChartBarIcon className="w-6 h-6" />}
              title="Análisis Inteligente"
              description="Visualiza tus patrones de gasto y recibe insights personalizados."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Datos Seguros"
              description="Tu información financiera protegida con los más altos estándares de seguridad."
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900" id="how-it-works">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <Step
              number="1"
              title="Registra tus movimientos"
              description="Escribe tus gastos e ingresos como lo harías en una nota."
            />
            <Step
              number="2"
              title="Visualiza tus finanzas"
              description="Obtén gráficos y reportes detallados de tu actividad financiera."
            />
            <Step
              number="3"
              title="Toma mejores decisiones"
              description="Recibe recomendaciones personalizadas basadas en tus hábitos."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Comienza a controlar tus finanzas hoy mismo
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de personas que ya han tomado el control de sus finanzas con nuestra plataforma.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center gap-2 group">
            Crear cuenta gratis
            <Zap className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

function Step({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}