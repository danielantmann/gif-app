import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";

export const GifApp = () => {
  return (
    <>
      <CustomHeader
        title="Buscador de Gif"
        description="Busca y comparte tus gifs"
      />
      <SearchBar placeholder="Buscar giffs" buttonTitle="Buscar" />
      <PreviousSearches
        title="Búsqueda Previa"
        searches={["Goku", "Messi", "Maradona"]}
      />
      <GifList gifs={mockGifs} />
    </>
  );
};
