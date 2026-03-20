import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Saved, Digest, Settings, Proof, NotFound } from '../src/pages';
import { Navigation } from '../src/components/Navigation';
import { MobileMenu } from '../src/components/MobileMenu';

describe('Route Components', () => {
  it('Dashboard renders with correct title', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('This section will be built in the next step.')).toBeInTheDocument();
  });

  it('Saved renders with correct title', () => {
    render(
      <MemoryRouter>
        <Saved />
      </MemoryRouter>
    );
    expect(screen.getByText('Saved')).toBeInTheDocument();
  });

  it('Digest renders with correct title', () => {
    render(
      <MemoryRouter>
        <Digest />
      </MemoryRouter>
    );
    expect(screen.getByText('Digest')).toBeInTheDocument();
  });

  it('Settings renders with correct title', () => {
    render(
      <MemoryRouter>
        <Settings />
      </MemoryRouter>
    );
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('Proof renders with correct title', () => {
    render(
      <MemoryRouter>
        <Proof />
      </MemoryRouter>
    );
    expect(screen.getByText('Proof')).toBeInTheDocument();
  });

  it('NotFound renders with correct message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument();
  });
});

describe('Navigation Component', () => {
  it('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(screen.getByText('Digest')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Proof')).toBeInTheDocument();
  });

  it('marks active link correctly', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Navigation />
      </MemoryRouter>
    );
    
    const dashboardLink = screen.getByText('Dashboard');
    expect(dashboardLink).toHaveClass('navigation__link--active');
  });
});

describe('MobileMenu Component', () => {
  it('renders hamburger button', () => {
    render(
      <MemoryRouter>
        <MobileMenu />
      </MemoryRouter>
    );
    
    expect(screen.getByLabelText('Toggle navigation menu')).toBeInTheDocument();
  });
});

describe('Route Configuration', () => {
  it('renders Dashboard on /dashboard route', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
