import React from "react";
import { shallow } from "enzyme";
import Header from "../src/layout/Header";

describe("Header", () => {
  it("Verificar logo & texto Admin", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".logo")).toHaveLength(1);
    expect(wrapper.find(".nav-profile").text()).toEqual("Admin");
  });
});
