import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';
import { MainLayout } from '@/components/layout/MainLayout';

export default function LoginPage() {
  return (
    <MainLayout showHeader={false} showFooter={false}>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </MainLayout>
  );
}