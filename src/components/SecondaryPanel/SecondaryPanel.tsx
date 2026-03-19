import React from 'react';
import type { SecondaryPanelProps } from '../../types';
import { Card } from '../Card';
import './SecondaryPanel.css';

export const SecondaryPanel: React.FC<SecondaryPanelProps> = ({
  stepTitle,
  explanation,
  promptText,
  className = '',
}) => {
  const handleCopy = () => {
    if (promptText) {
      navigator.clipboard.writeText(promptText);
    }
  };

  return (
    <aside className={`secondary-panel ${className}`}>
      <Card className="secondary-panel__card">
        <h3 className="secondary-panel__title">{stepTitle}</h3>
        <p className="secondary-panel__explanation">{explanation}</p>
        
        {promptText && (
          <div className="secondary-panel__prompt">
            <div className="secondary-panel__prompt-box">
              <code className="secondary-panel__prompt-text">{promptText}</code>
            </div>
            <button 
              className="secondary-panel__copy-btn"
              onClick={handleCopy}
              type="button"
            >
              Copy
            </button>
          </div>
        )}
      </Card>
    </aside>
  );
};

export default SecondaryPanel;
