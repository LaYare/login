import { ReactNode } from 'react';

export type TButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  type?: TButtonType;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}
