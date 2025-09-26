interface SearchBarProps {
  placeholder?: string;
  buttonTitle: string;
}

export const SearchBar = ({
  placeholder = "Buscar",
  buttonTitle,
}: SearchBarProps) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>{buttonTitle}</button>
    </div>
  );
};
