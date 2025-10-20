import { useState, useEffect } from 'react';

export type Page = 'home' | 'about' | 'portfolio' | 'services' | 'contact';

export function useRouter() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1) as Page;
    if (hash && ['home', 'about', 'portfolio', 'services', 'contact'].includes(hash)) {
      setCurrentPage(hash);
    }
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { currentPage, navigateTo };
}
