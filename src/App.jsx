import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top immediately when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (pathOrPage) => {
    const path = pathOrPage.startsWith('/')
      ? pathOrPage
      : pathOrPage === 'home'
      ? '/'
      : `/${pathOrPage}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute activePage string for Navbar & Layout highlighting
  const currentPath = location.pathname;
  const activePage =
    currentPath === '/our-works' || currentPath === '/works'
      ? 'works'
      : currentPath === '/about'
      ? 'about'
      : currentPath === '/services'
      ? 'services'
      : currentPath === '/contact'
      ? 'contact'
      : 'home';

  return (
    <MainLayout activePage={activePage} onNavigate={handleNavigate}>
      {({ onOpenProposal }) => (
        <AppRoutes 
          onOpenProposal={onOpenProposal} 
        />
      )}
    </MainLayout>
  );
}
