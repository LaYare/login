/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useRedirect } from '../../hooks';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const { redirectToLogin } = useRedirect();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      redirectToLogin();
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
