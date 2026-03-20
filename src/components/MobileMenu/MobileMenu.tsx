import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.css';

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/saved', label: 'Saved' },
  { path: '/digest', label: 'Digest' },
  { path: '/settings', label: 'Settings' },
  { path: '/proof', label: 'Proof' },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu__button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        type="button"
      >
        <span className={`mobile-menu__icon ${isOpen ? 'mobile-menu__icon--open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {isOpen && (
        <div className="mobile-menu__dropdown">
          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              {navItems.map((item) => (
                <li key={item.path} className="mobile-menu__item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
