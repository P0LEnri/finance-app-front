'use client';

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@/store';
import { useEffect } from 'react';
import { getCurrentUser } from '@/features/auth/authSlice';

const queryClient = new QueryClient();

function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      store.dispatch(getCurrentUser());
    }
  }, []);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}