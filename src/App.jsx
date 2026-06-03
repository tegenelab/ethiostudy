import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GradeCards from './components/GradeCards';
import Footer from './components/Footer';

const Roadmap = lazy(() => import('./components/Roadmap'));
const PopularTextbooks = lazy(() => import('./components/PopularTextbooks'));
const ExamPrepBanner = lazy(() => import('./components/ExamPrepBanner'));
const BooksPage = lazy(() => import('./components/BooksPage'));

function App() {
  const [page, setPage] = useState('home');
  const [openFolder, setOpenFolder] = useState(null);

  const navigateTo = (target, folderId = null) => {
    setPage(target);
    if (folderId) setOpenFolder(folderId);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Navbar page={page} onNavigate={setPage} />
      <main>
        {page === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <GradeCards onNavigate={navigateTo} />
            <Suspense fallback={null}>
              <PopularTextbooks onNavigate={navigateTo} />
            </Suspense>
            <Suspense fallback={null}>
              <Roadmap />
            </Suspense>
            <Suspense fallback={null}>
              <ExamPrepBanner onNavigate={navigateTo} />
            </Suspense>
          </>
        ) : (
          <Suspense fallback={<div style={{ padding: 80, textAlign: 'center', color: 'var(--text-secondary)' }}>Loading...</div>}>
            <BooksPage initialFolder={openFolder} />
          </Suspense>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
