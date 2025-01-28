import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import NavBar from './components/NavBar';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contacts = lazy(() => import('./pages/Contacts'));

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
