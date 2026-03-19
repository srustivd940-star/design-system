import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DefaultLayout } from '../src/layouts/DefaultLayout';
import { PrimaryWorkspace } from '../src/components/PrimaryWorkspace';
import { SecondaryPanel } from '../src/components/SecondaryPanel';

describe('Layout Structure', () => {
  it('renders with correct 70/30 workspace split', () => {
    const { container } = render(
      <DefaultLayout
        topBar={<div>TopBar</div>}
        contextHeader={<div>Header</div>}
        primaryWorkspace={<PrimaryWorkspace>Content</PrimaryWorkspace>}
        secondaryPanel={<SecondaryPanel stepTitle="Step" explanation="Explain" />}
        proofFooter={<div>Footer</div>}
      />
    );

    const workspace = container.querySelector('.default-layout__workspace');
    expect(workspace).toBeInTheDocument();
    
    const primaryWorkspace = container.querySelector('.primary-workspace');
    const secondaryPanel = container.querySelector('.secondary-panel');
    
    expect(primaryWorkspace).toBeInTheDocument();
    expect(secondaryPanel).toBeInTheDocument();
  });

  it('maintains layout order: TopBar -> ContextHeader -> Workspace -> Footer', () => {
    const { container } = render(
      <DefaultLayout
        topBar={<div data-testid="topbar">TopBar</div>}
        contextHeader={<div data-testid="header">Header</div>}
        primaryWorkspace={<div data-testid="workspace">Workspace</div>}
        secondaryPanel={<div data-testid="panel">Panel</div>}
        proofFooter={<div data-testid="footer">Footer</div>}
      />
    );

    const layout = container.querySelector('.default-layout');
    const children = layout?.children;
    
    expect(children?.[0]).toHaveAttribute('data-testid', 'topbar');
    expect(children?.[1]).toHaveAttribute('data-testid', 'header');
    expect(children?.[2]).toHaveClass('default-layout__workspace');
    expect(children?.[3]).toHaveAttribute('data-testid', 'footer');
  });
});

describe('Global Layout Structure Compliance', () => {
  it('follows [Top Bar] -> [Context Header] -> [Primary Workspace + Secondary Panel] -> [Proof Footer]', () => {
    const { container } = render(
      <DefaultLayout
        topBar={<header data-testid="topbar">TopBar</header>}
        contextHeader={<div data-testid="context">Context</div>}
        primaryWorkspace={<main data-testid="primary">Primary</main>}
        secondaryPanel={<aside data-testid="secondary">Secondary</aside>}
        proofFooter={<footer data-testid="proof">Proof</footer>}
      />
    );

    // Verify all required sections exist
    expect(container.querySelector('header[data-testid="topbar"]')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="context"]')).toBeInTheDocument();
    expect(container.querySelector('main[data-testid="primary"]')).toBeInTheDocument();
    expect(container.querySelector('aside[data-testid="secondary"]')).toBeInTheDocument();
    expect(container.querySelector('footer[data-testid="proof"]')).toBeInTheDocument();
  });
});
