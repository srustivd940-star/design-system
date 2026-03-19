import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../src/components/Button';
import { Input } from '../src/components/Input';
import { Card } from '../src/components/Card';
import { StatusBadge } from '../src/components/StatusBadge';
import { ProgressIndicator } from '../src/components/ProgressIndicator';
import { TopBar } from '../src/components/TopBar';
import { ContextHeader } from '../src/components/ContextHeader';
import { PrimaryWorkspace } from '../src/components/PrimaryWorkspace';
import { SecondaryPanel } from '../src/components/SecondaryPanel';
import { ProofFooter } from '../src/components/ProofFooter';
import { DefaultLayout } from '../src/layouts/DefaultLayout';

describe('Button Component', () => {
  it('renders primary button correctly', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders secondary button correctly', () => {
    render(<Button variant="secondary">Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small')).toBeInTheDocument();
    
    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByText('Medium')).toBeInTheDocument();
    
    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });
});

describe('Input Component', () => {
  it('renders input with label', () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  it('displays error message', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
});

describe('StatusBadge Component', () => {
  it('renders "Not Started" status', () => {
    render(<StatusBadge status="not-started" />);
    expect(screen.getByText('Not Started')).toBeInTheDocument();
  });

  it('renders "In Progress" status', () => {
    render(<StatusBadge status="in-progress" />);
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });

  it('renders "Shipped" status', () => {
    render(<StatusBadge status="shipped" />);
    expect(screen.getByText('Shipped')).toBeInTheDocument();
  });
});

describe('ProgressIndicator Component', () => {
  it('renders step information', () => {
    render(<ProgressIndicator currentStep={2} totalSteps={5} />);
    expect(screen.getByText('Step 2 / 5')).toBeInTheDocument();
  });

  it('renders correct progress bar width', () => {
    const { container } = render(<ProgressIndicator currentStep={2} totalSteps={5} />);
    const fill = container.querySelector('.progress-indicator__fill');
    expect(fill).toHaveStyle('width: 40%');
  });
});

describe('TopBar Component', () => {
  it('renders app name', () => {
    render(<TopBar appName="Test App" currentStep={1} totalSteps={5} status="in-progress" />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  it('renders progress indicator', () => {
    render(<TopBar appName="Test App" currentStep={2} totalSteps={5} status="in-progress" />);
    expect(screen.getByText('Step 2 / 5')).toBeInTheDocument();
  });

  it('renders status badge', () => {
    render(<TopBar appName="Test App" currentStep={1} totalSteps={5} status="shipped" />);
    expect(screen.getByText('Shipped')).toBeInTheDocument();
  });
});

describe('ContextHeader Component', () => {
  it('renders headline', () => {
    render(<ContextHeader headline="Test Headline" subtext="Test subtext" />);
    expect(screen.getByText('Test Headline')).toBeInTheDocument();
  });

  it('renders subtext', () => {
    render(<ContextHeader headline="Test Headline" subtext="Test subtext" />);
    expect(screen.getByText('Test subtext')).toBeInTheDocument();
  });
});

describe('PrimaryWorkspace Component', () => {
  it('renders children correctly', () => {
    render(<PrimaryWorkspace>Workspace content</PrimaryWorkspace>);
    expect(screen.getByText('Workspace content')).toBeInTheDocument();
  });
});

describe('SecondaryPanel Component', () => {
  it('renders step title', () => {
    render(<SecondaryPanel stepTitle="Step 1" explanation="Do this" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('renders explanation', () => {
    render(<SecondaryPanel stepTitle="Step 1" explanation="Do this task" />);
    expect(screen.getByText('Do this task')).toBeInTheDocument();
  });

  it('renders prompt text when provided', () => {
    render(<SecondaryPanel stepTitle="Step 1" explanation="Do this" promptText="Copy this" />);
    expect(screen.getByText('Copy this')).toBeInTheDocument();
  });

  it('has copy button when prompt text is provided', () => {
    render(<SecondaryPanel stepTitle="Step 1" explanation="Do this" promptText="Copy this" />);
    expect(screen.getByText('Copy')).toBeInTheDocument();
  });
});

describe('ProofFooter Component', () => {
  const items = [
    { label: 'UI Built', checked: true },
    { label: 'Test Passed', checked: false },
  ];

  it('renders all checklist items', () => {
    render(<ProofFooter items={items} />);
    expect(screen.getByText('UI Built')).toBeInTheDocument();
    expect(screen.getByText('Test Passed')).toBeInTheDocument();
  });

  it('renders checked state correctly', () => {
    render(<ProofFooter items={items} />);
    const checkedItem = screen.getByText('UI Built').closest('.proof-footer__item');
    expect(checkedItem).toHaveClass('proof-footer__item--checked');
  });

  it('renders unchecked state correctly', () => {
    render(<ProofFooter items={items} />);
    const uncheckedItem = screen.getByText('Test Passed').closest('.proof-footer__item');
    expect(uncheckedItem).not.toHaveClass('proof-footer__item--checked');
  });
});

describe('DefaultLayout Component', () => {
  it('renders all layout sections', () => {
    render(
      <DefaultLayout
        topBar={<div data-testid="topbar">TopBar</div>}
        contextHeader={<div data-testid="header">Header</div>}
        primaryWorkspace={<div data-testid="workspace">Workspace</div>}
        secondaryPanel={<div data-testid="panel">Panel</div>}
        proofFooter={<div data-testid="footer">Footer</div>}
      />
    );

    expect(screen.getByTestId('topbar')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('workspace')).toBeInTheDocument();
    expect(screen.getByTestId('panel')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
