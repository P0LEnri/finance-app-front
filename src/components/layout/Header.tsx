"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, UserCircle, LogOut, CreditCard, Settings, Plus, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { logout } from '@/features/auth/authSlice';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const showLandingLinks = pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      router.push('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  if (!mounted) {
    return null; // O un esqueleto de carga si lo prefieres
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              href={isAuthenticated ? '/dashboard' : '/'}
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              FinanceTracker
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!isAuthenticated ? (
              <>
                {showLandingLinks && (
                  <>
                    <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      Características
                    </Link>
                    <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      Precios
                    </Link>
                  </>
                )}
                <div className="flex items-center space-x-4">
                  <Link
                    href="/login"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Registrarse
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-6">
                <Link
                  href="/dashboard/new-transaction"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Plus size={20} />
                  <span>Nueva Transacción</span>
                </Link>
                
                <button 
                  type="button"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Bell size={20} />
                </button>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <UserCircle size={24} />
                    <span>{user?.name}</span>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 border border-gray-200 dark:border-gray-700">
                      <Link
                        href="/dashboard/accounts"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                      >
                        <CreditCard size={16} />
                        <span>Mis Cuentas</span>
                      </Link>
                      <Link
                        href="/dashboard/settings"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                      >
                        <Settings size={16} />
                        <span>Configuración</span>
                      </Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                      >
                        <LogOut size={16} />
                        <span>Cerrar Sesión</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {!isAuthenticated ? (
              <>
                {showLandingLinks && (
                  <>
                    <Link 
                      href="#features" 
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Características
                    </Link>
                    <Link 
                      href="#pricing" 
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Precios
                    </Link>
                  </>
                )}
                <div className="space-y-2">
                  <Link
                    href="/login"
                    className="block w-full text-left text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="/register"
                    className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Registrarse
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard/new-transaction"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Plus size={20} />
                  <span>Nueva Transacción</span>
                </Link>
                <Link
                  href="/dashboard/accounts"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <CreditCard size={20} />
                  <span>Mis Cuentas</span>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Settings size={20} />
                  <span>Configuración</span>
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700"
                >
                  <LogOut size={20} />
                  <span>Cerrar Sesión</span>
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}