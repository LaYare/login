'use client';

import { ButtonProps } from './Button.props';
import style from './Button.module.scss';

const Button = ({
  type = 'button',
  onClick,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${style.Button} ${disabled && style.Button__Disabled}`}
    >
      {children}
    </button>
  );
};

export default Button;
