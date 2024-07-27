export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

export const validateEmail = (email: string) => {
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  return passwordRegex.test(password);
};
