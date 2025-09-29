import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

const api_key = import.meta.env.VITE_GHIPHY_API_KEY;

describe("giphyApi", () => {
  test("should be configured correctly", () => {
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(giphyApi.defaults.params.lang).toBe("es");
    expect(giphyApi.defaults.params.api_key).toBe(api_key);
  });
});
