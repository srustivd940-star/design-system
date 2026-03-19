import React from 'react';
import type { ProofFooterProps } from '../../types';
import './ProofFooter.css';

export const ProofFooter: React.FC<ProofFooterProps> = ({
  items,
  className = '',
}) => {
  return (
    <footer className={`proof-footer ${className}`}>
      <div className="proof-footer__container">
        <h4 className="proof-footer__title">Completion Checklist</h4>
        <ul className="proof-footer__list">
          {items.map((item, index) => (
            <li 
              key={index} 
              className={`proof-footer__item ${item.checked ? 'proof-footer__item--checked' : ''}`}
            >
              <span className="proof-footer__checkbox">
                {item.checked ? '☑' : '☐'}
              </span>
              <span className="proof-footer__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default ProofFooter;
