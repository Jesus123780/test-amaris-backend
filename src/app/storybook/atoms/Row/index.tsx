import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Row.module.scss';

interface RowProps {
  children: ReactNode;
  className?: string;
}

export const Row: React.FC<RowProps> = ({ children, className }) => {
  const rowClasses = classNames(styles.row, className);

  return <div className={rowClasses}>{children}</div>;
};

