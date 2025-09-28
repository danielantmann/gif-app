interface PreviousSearchesProps {
  title: string;
  searches: string[];
  onLabelClick: (term: string) => void;
}

export const PreviousSearches = ({
  title,
  searches,
  onLabelClick,
}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term} onClick={() => onLabelClick(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
