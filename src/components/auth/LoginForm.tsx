'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/features/auth/authSlice';
import { AppDispatch, RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
});

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(login(values)).unwrap();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Bienvenido de nuevo
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Ingresa tus credenciales para continuar
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
                className="block w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="tu@email.com"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-error-500">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Contraseña
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
                className="block w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="••••••••"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-error-500">{formik.errors.password}</p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 transition-colors"
          >
            {loading ? (
              'Iniciando sesión...'
            ) : (
              <>
                Iniciar sesión
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        <div className="text-center">
          <Link 
            href="/register" 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center gap-1"
          >
            ¿No tienes cuenta? Regístrate aquí
          </Link>
        </div>
      </form>
    </div>
  );
};