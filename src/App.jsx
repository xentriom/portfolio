import { Suspense, lazy, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useFirebaseTracking } from './hooks/useFirebaseTracking';
import Background from './components/Background';
import Header from './components/Header';
import Loading from './components/Loading';
import NavBar from './components/NavBar';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contacts = lazy(() => import('./pages/Contacts'));

function App() {
  useFirebaseTracking();

  const memoizedRoutes = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    ),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center">
        <Header />
        <NavBar />
        <main className="w-full max-w-2xl flex flex-col flex-grow p-6 glassmorph-gradient">
          <Suspense fallback={<Loading />}>{memoizedRoutes}</Suspense>
        </main>
      </div>

      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;

// from-gray-800 to-gray-900 text-gray-200 shadow-lg border-b border-x border-gray-700