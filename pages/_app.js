import 'tailwindcss/tailwind.css';
import './styles.css';
import { useState, useEffect } from 'react';
import PasswordScreen from '../components/PasswordScreen';

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated (stored in localStorage)
    const authStatus = localStorage.getItem('airbus-auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handlePasswordCorrect = () => {
    localStorage.setItem('airbus-auth', 'authenticated');
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordScreen onPasswordCorrect={handlePasswordCorrect} />;
  }

  return <Component {...pageProps} />
}

export default MyApp;
