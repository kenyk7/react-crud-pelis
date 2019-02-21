import React from "react";
import { shallow } from "enzyme";
import Modal from "../src/commons/Modal";

describe("Modal", () => {
  it("Verificar título vacío", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(".modal__title").text()).toEqual("");
  });
  it("Verificar título Hello", () => {
    const wrapper = shallow(<Modal title="Hello" />);
    expect(wrapper.find(".modal__title").text()).toEqual("Hello");
  });
  it("Verificar render children custom", () => {
    const wrapper = shallow(
      <Modal>
        <h3>Hola</h3>
      </Modal>
    );
    expect(wrapper.contains(<h3>Hola</h3>)).toEqual(true);
  });
});
