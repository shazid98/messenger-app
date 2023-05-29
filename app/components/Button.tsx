'use client'
import clsx from 'clsx';
import { type } from 'os';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled
}) => {
  return (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={clsx(`
      inline-flex
      justify-center
      py-2
      px-4
      border
      border-transparent
      shadow-sm
      text-sm
      font-medium
      rounded-md
      text-white
      bg-sky-500
      hover:bg-sky-600
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-sky-500`,
      fullWidth && `w-full`,
      secondary  ? `bg-gray-600 hover:bg-gray-700` : `text-white`,
      danger && `bg-red-600 hover:bg-red-700 focus-visible:outline-rose-600`,
      disabled && `opacity-50 cursor-default`,
      !secondary && !danger && `bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600`,
    )}>
      {children}
  </button>);
}

export default Button;