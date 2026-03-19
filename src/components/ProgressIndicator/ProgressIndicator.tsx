import React from 'react';
import type { ProgressIndicatorProps } from '../../types';
import './ProgressIndicator.css';

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  className = '',
}) => {
  return (
    <div className={`progress-indicator ${className}`}>
      <span className="progress-indicator__text">
        Step {currentStep} / {totalSteps}
      </span>
      <div className="progress-indicator__bar">
        <div 
          className="progress-indicator__fill"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;
