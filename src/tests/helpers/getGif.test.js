import { getGifs } from "../../helpers/getGifs";

describe("pruebas con getGifs fetchs", () => {
  test("debe traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });

  test("debe traer un array vacio", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
