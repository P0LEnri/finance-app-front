import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              FinanceTracker
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Simplifica la gestión de tus finanzas personales con nuestra plataforma intuitiva y herramientas avanzadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Producto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Guías
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} FinanceTracker. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}