'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BadgeDollarSign } from 'lucide-react';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-600 p-12 flex-col relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-800/50" />
        
        <div className="relative z-10">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => router.push('/')}
          >
            <BadgeDollarSign className="text-white" size={32} />
            <span className="text-2xl font-bold text-white">FinanceTracker</span>
          </div>
          
          <div className="flex flex-col justify-center flex-grow py-12">
            <h1 className="text-4xl font-bold text-white mb-6">
              Toma el control de tus finanzas
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Únete a miles de personas que ya están gestionando sus finanzas de manera inteligente.
            </p>
            <div className="space-y-4">
              <TestimonialCard
                text="Me ha ayudado a ahorrar más de lo que esperaba. ¡Excelente herramienta!"
                author="María G."
              />
              <TestimonialCard
                text="La mejor manera de mantener mis gastos bajo control. Muy recomendado."
                author="Carlos R."
              />
            </div>
          </div>

          <footer className="text-primary-100 text-sm">
            © {new Date().getFullYear()} FinanceTracker. Todos los derechos reservados.
          </footer>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ text, author }: { text: string; author: string }) => (
  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
    <p className="text-white mb-2">{text}</p>
    <p className="text-primary-200 text-sm">— {author}</p>
  </div>
);