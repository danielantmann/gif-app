import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGif] = useState<Gif[]>([]);
  const handleTermClick = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query.toLowerCase().trim();
    if (previousTerms.includes(query)) {
      return;
    }

    if (query.length === 0) {
      return;
    }

    const currentTerms = previousTerms.slice(0, 6);

    currentTerms.unshift(query);

    console.log(query);
    setPreviousTerms(currentTerms);

    const gifs = await getGifsByQuery(query);

    setGif(gifs);
  };
  return (
    <>
      <CustomHeader
        title="Buscador de Gif"
        description="Busca y comparte tus gifs"
      />
      <SearchBar
        placeholder="Buscar giffs"
        buttonTitle="Buscar"
        onQuery={handleSearch}
      />
      <PreviousSearches
        title="Búsqueda Previa"
        searches={previousTerms}
        onLabelClick={handleTermClick}
      />
      <GifList gifs={gifs} />
    </>
  );
};
