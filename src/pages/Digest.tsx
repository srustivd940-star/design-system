import '../styles/empty-state.css';

export const Digest = () => {
  return (
    <div className="empty-state">
      <div className="empty-state__content">
        <h1 className="empty-state__title">Daily Digest</h1>
        <p className="empty-state__message">
          Your daily summary will appear here.
        </p>
        <p className="empty-state__explanation">
          Once configured, you will receive a curated list of matching jobs every morning at 9AM. This digest will include new postings, saved job updates, and recommended opportunities based on your preferences.
        </p>
      </div>
    </div>
  );
};

export default Digest;
