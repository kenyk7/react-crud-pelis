import React from "react";
import { shallow } from "enzyme";
import Home from "../src/home";

describe("Home", () => {
  it("Verificar textos", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").text()).toEqual("Películas");
    expect(wrapper.find("button").text()).toEqual("Nueva película");
  });
  it("Verificar modal de nueva película + click", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.state().modalFilm).toBe(false);
    wrapper.find("button").simulate("click", {});
    expect(wrapper.state().modalFilm).toBe(true);
  });
});
