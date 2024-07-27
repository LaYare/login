// utils/generateTitle.ts
export const generateTitle = (pathname: string): string => {
  const routeTitle =
    pathname === '/'
      ? 'Login'
      : pathname
          .replace('/', '')
          .split('/')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
  return `${routeTitle}`;
};
