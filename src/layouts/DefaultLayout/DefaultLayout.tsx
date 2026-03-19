import React from 'react';
import type { DefaultLayoutProps } from '../../types';
import './DefaultLayout.css';

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  topBar,
  contextHeader,
  primaryWorkspace,
  secondaryPanel,
  proofFooter,
  className = '',
}) => {
  return (
    <div className={`default-layout ${className}`}>
      {topBar}
      {contextHeader}
      <div className="default-layout__workspace">
        {primaryWorkspace}
        {secondaryPanel}
      </div>
      {proofFooter}
    </div>
  );
};

export default DefaultLayout;
