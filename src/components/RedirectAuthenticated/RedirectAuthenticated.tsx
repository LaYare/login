'use client';

import { ReactNode, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRedirect } from '../../hooks';

const RedirectAuthenticated = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const { redirectToDashboard } = useRedirect();

  useEffect(() => {
    if (isAuthenticated) {
      redirectToDashboard();
    }
  }, [isAuthenticated, redirectToDashboard]);

  if (isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default RedirectAuthenticated;
