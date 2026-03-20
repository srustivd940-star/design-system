import { Card } from '../components/Card';
import { Input } from '../components/Input';
import '../styles/settings.css';

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__container">
        <h1 className="settings__title">Preferences</h1>
        <p className="settings__subtitle">
          Configure your job search preferences. These settings will be used to match you with relevant opportunities.
        </p>

        <div className="settings__grid">
          <Card className="settings__card">
            <h2 className="settings__section-title">Role Keywords</h2>
            <p className="settings__section-description">
              Enter job titles, skills, or keywords you are looking for.
            </p>
            <Input
              label="Keywords"
              placeholder="e.g., Product Manager, React, UX Design"
            />
          </Card>

          <Card className="settings__card">
            <h2 className="settings__section-title">Preferred Locations</h2>
            <p className="settings__section-description">
              Specify cities, regions, or countries where you want to work.
            </p>
            <Input
              label="Locations"
              placeholder="e.g., San Francisco, Remote, London"
            />
          </Card>

          <Card className="settings__card">
            <h2 className="settings__section-title">Work Mode</h2>
            <p className="settings__section-description">
              Select your preferred work arrangement.
            </p>
            <div className="settings__options">
              <label className="settings__option">
                <input type="radio" name="workMode" value="remote" />
                <span>Remote</span>
              </label>
              <label className="settings__option">
                <input type="radio" name="workMode" value="hybrid" />
                <span>Hybrid</span>
              </label>
              <label className="settings__option">
                <input type="radio" name="workMode" value="onsite" />
                <span>Onsite</span>
              </label>
            </div>
          </Card>

          <Card className="settings__card">
            <h2 className="settings__section-title">Experience Level</h2>
            <p className="settings__section-description">
              Select your current experience level.
            </p>
            <div className="settings__options">
              <label className="settings__option">
                <input type="radio" name="experience" value="entry" />
                <span>Entry Level</span>
              </label>
              <label className="settings__option">
                <input type="radio" name="experience" value="mid" />
                <span>Mid Level</span>
              </label>
              <label className="settings__option">
                <input type="radio" name="experience" value="senior" />
                <span>Senior Level</span>
              </label>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
