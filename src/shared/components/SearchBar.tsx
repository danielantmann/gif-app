import React, { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  buttonTitle: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({
  placeholder = "Buscar",
  buttonTitle,
  onQuery,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      />
      <button onClick={handleSearch}>{buttonTitle}</button>
    </div>
  );
};
