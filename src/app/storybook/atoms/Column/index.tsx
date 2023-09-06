import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Column.module.scss';

interface ColumnProps {
  children: ReactNode;
  className?: string;
}

export const Column: React.FC<ColumnProps> = ({ children, className }) => {
  const columnClasses = classNames(styles.column, className);

  return <div className={columnClasses}>{children}</div>;
};

