import { useRouter } from 'next/navigation';

const useRedirect = () => {
  const router = useRouter();

  const redirectToDashboard = () => {
    router.push('/dashboard');
  };

  const redirectToLogin = () => {
    router.push('/');
  };

  return { redirectToDashboard, redirectToLogin };
};

export default useRedirect;
