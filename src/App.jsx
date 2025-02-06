import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useFirebaseTracking } from './hooks/useFirebaseTracking';
import Header from './components/Header';
import Loading from './components/Loading';
import NavBar from './components/NavBar';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contacts = lazy(() => import('./pages/Contacts'));

function App() {
  useFirebaseTracking();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <NavBar />
      <main className="w-full max-w-2xl flex flex-col flex-grow p-6 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm text-white shadow-lg">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
