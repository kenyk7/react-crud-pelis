import React from "react";
import { shallow } from "enzyme";
import CrudTable from "../src/commons/CrudTable";

const titles = ["Name", "Email"];
const data = [{ name: "keny", email: "keny@gmail.com" }];

describe("CrudTable", () => {
  const wrapper = shallow(
    <CrudTable titles={titles} data={data} onEditItem={() => {}} />
  );
  it("Verificar titles lenght & data: titles, data", () => {
    // titles + acciones: 3
    expect(wrapper.find(".table thead tr th")).toHaveLength(3);
    // data length: 1
    expect(wrapper.find(".table tbody tr")).toHaveLength(1);
  });
  it("Verificar modal confirm state delete: item 0", () => {
    // before click
    expect(wrapper.state().idxTemp).toBe(null);
    expect(wrapper.state().modalConfirm).toBe(false);
    wrapper.find(".table tbody tr .js-btn-trash").simulate("click", {});
    // after click
    expect(wrapper.state().idxTemp).toBe(0);
    expect(wrapper.state().modalConfirm).toBe(true);
  });
  it("Verificar modal confirm + textos btns", () => {
    expect(wrapper.find("Modal")).toHaveLength(1);
    expect(wrapper.find("Modal .btn--default").text()).toEqual("Cancelar");
    expect(wrapper.find("Modal .btn--primary").text()).toEqual("Confirmar");
  });
});
