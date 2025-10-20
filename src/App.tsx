import { useState } from 'react';
import { useRouter } from './hooks/useRouter';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const { currentPage, navigateTo } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  if (showPreloader) {
    return <Preloader onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      <main>{renderPage()}</main>
      <FloatingActions />
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;
