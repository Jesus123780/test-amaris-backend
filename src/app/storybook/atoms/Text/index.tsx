import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';

interface TextProps {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'default' | 'large';
  align?: 'center' | 'start';
  color?: 'default' | 'primary' | 'secondary';
  bold?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  size = 'default',
  color = 'default',
  align = 'center',
  bold = false,
}) => {
  const textClasses = classNames(styles.text, className, {
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.align]: align === 'center',
    [styles.bold]: bold,
  });

  return <span className={textClasses}>{children}</span>;
};

