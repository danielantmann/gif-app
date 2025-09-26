interface PreviousSearchesProps {
  title: string;
  searches: string[];
}
export const PreviousSearches = ({
  title,
  searches,
}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>
    </div>
  );
};
