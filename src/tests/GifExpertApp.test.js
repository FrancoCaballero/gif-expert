import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en el componente GifExpertApp", () => {
  test("se debe mostrar correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
