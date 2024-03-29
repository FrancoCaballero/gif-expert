import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("probando componente GifGrid", () => {
  const category = "One Punch";

  test("se debe mostrar correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/prueba/prueba.jpg",
        title: "prueba",
      },
      {
        id: "123",
        url: "https://localhost/prueba/prueba.jpg",
        title: "prueba",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
