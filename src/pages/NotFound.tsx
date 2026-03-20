import '../styles/placeholder.css';

export const NotFound = () => {
  return (
    <div className="placeholder-page">
      <div className="placeholder-page__content">
        <h1 className="placeholder-page__title">Page Not Found</h1>
        <p className="placeholder-page__subtext">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
