import React from 'react';
import type { TopBarProps } from '../../types';
import { ProgressIndicator } from '../ProgressIndicator';
import { StatusBadge } from '../StatusBadge';
import './TopBar.css';

export const TopBar: React.FC<TopBarProps> = ({
  appName,
  currentStep,
  totalSteps,
  status,
  className = '',
}) => {
  return (
    <header className={`topbar ${className}`}>
      <div className="topbar__left">
        <span className="topbar__app-name">{appName}</span>
      </div>
      <div className="topbar__center">
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      <div className="topbar__right">
        <StatusBadge status={status} />
      </div>
    </header>
  );
};

export default TopBar;
