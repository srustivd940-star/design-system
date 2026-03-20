import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { MobileMenu } from './components/MobileMenu';
import { Dashboard, Saved, Digest, Settings, Proof, NotFound } from './pages';
import './App.css';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header__container">
        <div className="app-header__brand">
          <a href="/" className="app-header__logo">
            Job Notification App
          </a>
        </div>
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/digest" element={<Digest />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
