import React, { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  const buttonClasses = classNames(styles.button, className);

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

