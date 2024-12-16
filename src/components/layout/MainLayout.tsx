import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function MainLayout({ 
    children, 
    showHeader = true, 
    showFooter = true 
  }: MainLayoutProps) {
    return (
      <div className="min-h-screen flex flex-col">
        {showHeader && <Header />}
        <main className={`flex-grow ${showHeader ? 'pt-16' : ''}`}>
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
    );
  }