/**
 * TypeScript Types - Job Notification App Design System
 */

// ========================================
// Status Types
// ========================================
export type StatusType = 'not-started' | 'in-progress' | 'shipped';

// ========================================
// Button Types
// ========================================
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

// ========================================
// Component Props
// ========================================

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  id?: string;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export interface TopBarProps {
  appName: string;
  currentStep: number;
  totalSteps: number;
  status: StatusType;
  className?: string;
}

export interface ContextHeaderProps {
  headline: string;
  subtext: string;
  className?: string;
}

export interface PrimaryWorkspaceProps {
  children: React.ReactNode;
  className?: string;
}

export interface SecondaryPanelProps {
  stepTitle: string;
  explanation: string;
  promptText?: string;
  className?: string;
}

export interface ProofFooterProps {
  items: {
    label: string;
    checked: boolean;
  }[];
  className?: string;
}

export interface DefaultLayoutProps {
  topBar: React.ReactNode;
  contextHeader: React.ReactNode;
  primaryWorkspace: React.ReactNode;
  secondaryPanel: React.ReactNode;
  proofFooter: React.ReactNode;
  className?: string;
}
