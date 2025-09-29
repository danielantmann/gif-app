import { beforeEach, describe, expect, expectTypeOf, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query";
import AxiosMockAdapter from "axios-mock-adapter";
import { giphySearchResponseMock } from "../../../tests/mock/giphy.response.data";
import { giphyApi } from "../api/giphy.api";

describe("getGifsByQuery", () => {
  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    mock = new AxiosMockAdapter(giphyApi);
  });

  test("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const gifs = await getGifsByQuery("goku");

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expectTypeOf(gif.id).toBeString();
      expectTypeOf(gif.title).toBeString();
      expectTypeOf(gif.url).toBeString();
      expectTypeOf(gif.width).toBeNumber();
      expectTypeOf(gif.height).toBeNumber();
    });
  });

  test("should return a empty list of gifs is query is empty", async () => {
    mock.restore();
    const gifs = await getGifsByQuery("");

    expect(gifs.length).toBe(0);
  });

  test("should return a n error when the API returns error", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    mock.onGet("/search").reply(400, {
      data: {
        message: "Bad Request",
      },
    });
    const gifs = await getGifsByQuery("goku");

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
  });
});
