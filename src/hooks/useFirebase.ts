import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export const useFirebaseConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Simple check to see if Firebase is configured
        const hasConfig = !!(
          import.meta.env.VITE_FIREBASE_API_KEY &&
          import.meta.env.VITE_FIREBASE_PROJECT_ID
        );
        
        setIsConnected(hasConfig);
        if (!hasConfig) {
          setError('Firebase configuration missing');
        }
      } catch (err) {
        setError('Firebase connection failed');
        setIsConnected(false);
      }
    };

    checkConnection();
  }, []);

  return { isConnected, error };
};