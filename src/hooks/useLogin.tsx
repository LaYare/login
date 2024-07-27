import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';

interface LoginVariables {
  email: string;
  password: string;
}

interface LoginData {
  generateCustomerToken: {
    token: string;
  };
}

const useLogin = () => {
  const [login, { data, loading, error }] = useMutation<
    LoginData,
    LoginVariables
  >(LOGIN_MUTATION);

  return {
    login,
    data,
    loading,
    error,
  };
};

export default useLogin;
