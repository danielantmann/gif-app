import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGif] = useState<Gif[]>([]);

  const gifCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifCache.current[term]) {
      setGif(gifCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);
    setGif(gifs);
    gifCache.current[term] = gifs;
  };

  const handleSearch = async (query: string = "") => {
    query = query.toLowerCase().trim();
    if (previousTerms.includes(query)) {
      return;
    }

    if (query.length === 0) {
      return;
    }

    const currentTerms = previousTerms.slice(0, 7);

    currentTerms.unshift(query);

    console.log(query);
    setPreviousTerms(currentTerms);

    const gifs = await getGifsByQuery(query);

    setGif(gifs);

    gifCache.current[query] = gifs;
  };
  return { previousTerms, gifs, handleSearch, handleTermClick };
};
