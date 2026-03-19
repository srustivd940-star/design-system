import React from 'react';
import type { CardProps } from '../../types';
import './Card.css';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
