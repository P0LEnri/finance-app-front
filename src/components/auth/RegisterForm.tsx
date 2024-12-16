'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/features/auth/authSlice';
import { AppDispatch, RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
    .required('Confirma tu contraseña'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await dispatch(register(values)).unwrap();
        if (result) {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Crea tu cuenta
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Comienza a gestionar tus finanzas de manera inteligente
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Nombre
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                type="text"
                {...formik.getFieldProps('name')}
                className="block w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Tu nombre"
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <p className="mt-1 text-sm text-error-500">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
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

          {/* Contraseña */}
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

          {/* Confirmar Contraseña */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Confirmar Contraseña
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                type="password"
                {...formik.getFieldProps('confirmPassword')}
                className="block w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="••••••••"
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="mt-1 text-sm text-error-500">{formik.errors.confirmPassword}</p>
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
              'Creando cuenta...'
            ) : (
              <>
                Crear cuenta
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        <div className="text-center">
          <Link 
            href="/login" 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center gap-1"
          >
            ¿Ya tienes cuenta? Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
};