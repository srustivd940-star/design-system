import '../styles/empty-state.css';

export const Saved = () => {
  return (
    <div className="empty-state">
      <div className="empty-state__content">
        <h1 className="empty-state__title">Saved Jobs</h1>
        <p className="empty-state__message">
          No saved jobs yet.
        </p>
        <p className="empty-state__explanation">
          Jobs you save will appear here for quick access. This helps you track opportunities you are interested in without losing them in your search.
        </p>
      </div>
    </div>
  );
};

export default Saved;
