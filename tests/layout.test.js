import React from "react";
import { shallow } from "enzyme";
import Layout from "../src/layout";
import Home from "../src/home";

describe("Layout", () => {
  it("Verificar render de children en layout + posición", () => {
    const wrapper = shallow(
      <Layout>
        <Home />
      </Layout>
    );
    expect(wrapper.find(".wrapper__main").contains(<Home />)).toEqual(true);
  });
});
