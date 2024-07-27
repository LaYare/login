'use client';

import { useLoginHandler } from '../../hooks';
import { Input, Button } from '../';
import styles from './LoginForm.module.scss';
import { useState } from 'react';

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    loading,
    error,
  } = useLoginHandler();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <h2 className={styles.Form__Title}>Entra en tu cuenta</h2>
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={(e: { target: { value: any } }) => setEmail(e.target.value)}
        placeholder="Email"
        helperText="Email incorrecto"
        hasError={(isValid) => setIsCorrect(isValid)}
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={(e: { target: { value: any } }) =>
          setPassword(e.target.value)
        }
        placeholder="Password"
        helperText="Contraseña incorrecta"
        hasError={(isValid) => setIsCorrect(isValid)}
      />
      <Button
        type="submit"
        disabled={loading || !email || !password || !isCorrect}
      >
        {loading ? 'Loading...' : 'Iniciar sesión'}
      </Button>
      {error && <p className={styles.Form__Error}>Error: {error.message}</p>}
      <p className={styles.Form__ForgotPassword}>¿Olvidaste tu contraseña?</p>
    </form>
  );
};

export default LoginForm;
