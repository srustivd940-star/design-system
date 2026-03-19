import React from 'react';
import type { PrimaryWorkspaceProps } from '../../types';
import './PrimaryWorkspace.css';

export const PrimaryWorkspace: React.FC<PrimaryWorkspaceProps> = ({
  children,
  className = '',
}) => {
  return (
    <main className={`primary-workspace ${className}`}>
      {children}
    </main>
  );
};

export default PrimaryWorkspace;
