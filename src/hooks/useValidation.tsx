import { useState, useEffect } from 'react';
import { validateEmail, validatePassword } from '../utils';

const validationFunctions: { [key: string]: (value: string) => boolean } = {
  email: validateEmail,
  password: validatePassword,
};

const useValidation = (
  type: 'email' | 'password' | 'number' | 'text',
  value: string
) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (value) {
      const validate = validationFunctions[type];
      setIsValid(validate ? validate(value) : true);
    }
  }, [type, value]);

  return isValid;
};

export default useValidation;
