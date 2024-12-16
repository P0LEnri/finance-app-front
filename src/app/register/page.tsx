import { AuthLayout } from '@/components/auth/AuthLayout';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { MainLayout } from '@/components/layout/MainLayout';

export default function RegisterPage() {
  return (
    <MainLayout showHeader={false} showFooter={false}>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </MainLayout>
  );
}