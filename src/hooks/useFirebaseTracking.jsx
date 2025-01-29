import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../utils/firebase';

export const useFirebasePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, 'screen_view', {
      screen_name: location.pathname,
    });
  }, [location]);
};
