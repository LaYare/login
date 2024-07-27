/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { useValidation } from '../../hooks';
import { InputProps } from './Input.props';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import styles from './Input.module.scss';

const Input = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  helperText,
  hasError,
}: InputProps) => {
  const isValid = useValidation(type, value);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (hasError) {
      hasError(isValid);
    }
  }, [isValid]);

  return (
    <div className={styles.Input}>
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.Input__Item} ${
          !isValid && styles.Input__HasError
        }`}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className={styles.Input__ShowPassword}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
      {!isValid && value && (
        <p className={styles.Input__HelperText}>{helperText}</p>
      )}
    </div>
  );
};

export default Input;
