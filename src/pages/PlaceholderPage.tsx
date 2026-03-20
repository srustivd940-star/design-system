import '../styles/placeholder.css';

interface PlaceholderPageProps {
  title: string;
}

export const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <div className="placeholder-page">
      <div className="placeholder-page__content">
        <h1 className="placeholder-page__title">{title}</h1>
        <p className="placeholder-page__subtext">
          This section will be built in the next step.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
