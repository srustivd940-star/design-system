import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/landing.css';

export const Landing = () => {
  const navigate = useNavigate();

  const handleStartTracking = () => {
    navigate('/settings');
  };

  return (
    <div className="landing">
      <div className="landing__content">
        <h1 className="landing__headline">Stop Missing The Right Jobs.</h1>
        <p className="landing__subtext">
          Precision-matched job discovery delivered daily at 9AM.
        </p>
        <div className="landing__cta">
          <Button variant="primary" size="lg" onClick={handleStartTracking}>
            Start Tracking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
