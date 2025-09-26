import { Gifs } from "./components/Gifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";

export const GifApp = () => {
  return (
    <>
      <CustomHeader
        title="Buscador de Gif"
        description="Busca y comparte tus gifs"
      />
      <SearchBar placeholder="Buscar giffs" buttonTitle="Buscar" />
      <PreviousSearches />
      <Gifs />
    </>
  );
};
