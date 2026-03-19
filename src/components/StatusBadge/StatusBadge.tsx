import React from 'react';
import type { StatusBadgeProps, StatusType } from '../../types';
import './StatusBadge.css';

const statusLabels: Record<StatusType, string> = {
  'not-started': 'Not Started',
  'in-progress': 'In Progress',
  'shipped': 'Shipped',
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = '',
}) => {
  return (
    <span className={`status-badge status-badge--${status} ${className}`}>
      {statusLabels[status]}
    </span>
  );
};

export default StatusBadge;
