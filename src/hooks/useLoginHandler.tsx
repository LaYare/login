import { useState } from 'react';
import { useLogin, useRedirect } from './';
import { useAuth } from '../context/AuthContext';

const useLoginHandler = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, data, loading, error } = useLogin();
  const { login: loginAuthContext } = useAuth();
  const { redirectToDashboard } = useRedirect();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ variables: { email, password } });
    } catch (e) {
      console.error(e);
    }
  };

  if (data?.generateCustomerToken.token) {
    loginAuthContext(data.generateCustomerToken.token);
    redirectToDashboard();
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    loading,
    error,
  };
};

export default useLoginHandler;
