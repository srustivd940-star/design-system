import React from 'react';
import type { ContextHeaderProps } from '../../types';
import './ContextHeader.css';

export const ContextHeader: React.FC<ContextHeaderProps> = ({
  headline,
  subtext,
  className = '',
}) => {
  return (
    <div className={`context-header ${className}`}>
      <h1 className="context-header__headline">{headline}</h1>
      <p className="context-header__subtext">{subtext}</p>
    </div>
  );
};

export default ContextHeader;
