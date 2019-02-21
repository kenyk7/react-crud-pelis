import React, { Component } from "react";
import nanoid from "nanoid";

import CrudTable from "./commons/CrudTable";
import ModalFilm from "./commons/ModalFilm";

const titles = ["ID", "Nombre", "F. Publicación", "Estado"];
const tableState = [
  {
    id: nanoid(5),
    name: "Jason Bourne",
    date: "2016-06-12",
    available: 1
  },
  {
    id: nanoid(5),
    name: "Nada es lo que parece",
    date: "2017-05-12",
    available: 0
  },
  {
    id: nanoid(5),
    name: "Nada es lo que parece 2",
    date: "2018-09-12",
    available: 1
  }
];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      titlesTable: titles,
      dataTable: [],
      modalFilm: false,
      filmEdit: {}
    };
  }

  componentDidMount() {
    this.getDataLocal();
  }

  getDataLocal() {
    const lsData = localStorage.getItem("dataTable");
    if (lsData) {
      const dataTable = JSON.parse(lsData);
      this.setState({ dataTable });
    } else {
      this.setState({ dataTable: tableState });
    }
  }

  openModalFilm() {
    this.setState({ modalFilm: true });
  }

  closeModalFilm() {
    this.setState({ modalFilm: false, filmEdit: {} });
  }

  updateData(dataTable) {
    this.setState({ dataTable });
    this.saveInLocal(dataTable);
  }

  onEditItem(filmEdit) {
    this.setState({ filmEdit });
    this.openModalFilm();
  }

  onSaveFilm(film) {
    const { dataTable, filmEdit } = this.state;
    const clonData = [...dataTable];
    if (filmEdit.id) {
      const idx = dataTable.findIndex(el => el.id === filmEdit.id);
      clonData[idx] = film;
    } else {
      clonData.push(film);
    }
    this.setState({ dataTable: clonData, filmEdit: {} });
    this.closeModalFilm();
    this.saveInLocal(clonData);
  }

  saveInLocal = dataTable => {
    localStorage.setItem("dataTable", JSON.stringify(dataTable));
  };

  render() {
    const { titlesTable, dataTable, modalFilm, filmEdit } = this.state;
    return (
      <div>
        <div className="d-flex align-center justify-between">
          <h1>Películas</h1>
          <button
            onClick={() => this.openModalFilm()}
            type="button"
            className="btn btn--primary"
          >
            Nueva película
          </button>
        </div>
        <div>
          <CrudTable
            titles={titlesTable}
            data={dataTable}
            onUpdate={data => this.updateData(data)}
            onEditItem={item => this.onEditItem(item)}
          />
        </div>
        {modalFilm && (
          <ModalFilm
            film={filmEdit}
            title={!filmEdit.id ? "Nueva Película" : "Editar Película"}
            onSave={film => this.onSaveFilm(film)}
            onClose={() => this.closeModalFilm()}
          />
        )}
      </div>
    );
  }
}

export default Home;
