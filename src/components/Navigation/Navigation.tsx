import { NavLink } from 'react-router-dom';
import './Navigation.css';

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/saved', label: 'Saved' },
  { path: '/digest', label: 'Digest' },
  { path: '/settings', label: 'Settings' },
  { path: '/proof', label: 'Proof' },
];

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map((item) => (
          <li key={item.path} className="navigation__item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
