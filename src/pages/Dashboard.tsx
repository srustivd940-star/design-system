import '../styles/empty-state.css';

export const Dashboard = () => {
  return (
    <div className="empty-state">
      <div className="empty-state__content">
        <h1 className="empty-state__title">Dashboard</h1>
        <p className="empty-state__message">
          No jobs yet. In the next step, you will load a realistic dataset.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
