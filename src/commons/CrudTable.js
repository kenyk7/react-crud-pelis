import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

const propTypes = {
  titles: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired
};

class CrudTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalConfirm: false,
      idxTemp: null
    };
  }

  onDelete(idxTemp) {
    this.setState({ idxTemp, modalConfirm: true });
  }

  deleteConfirm() {
    const { onUpdate, data } = this.props;
    const { idxTemp } = this.state;
    const clonData = [...data];
    clonData.splice(idxTemp, 1);
    onUpdate(clonData);
    this.modalClose();
  }

  editFilm(film, idx) {
    const { onEditItem } = this.props;
    onEditItem(film, idx);
  }

  modalClose() {
    this.setState({ modalConfirm: false });
  }

  render() {
    const { titles, data } = this.props;
    const { modalConfirm } = this.state;
    return (
      <div>
        <table className="table table--odd">
          <thead>
            <tr>
              {titles.map(name => (
                <th key={name}>{name}</th>
              ))}
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id}>
                {Object.keys(item).map(el => (
                  <td key={el}>{data[idx][el]}</td>
                ))}
                {/*<td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.available ? "Activo" : "Inactivo"}</td>*/}
                <td className="text-center">
                  <button
                    onClick={() => this.editFilm(item)}
                    type="button"
                    className="btn btn--link js-btn-edit"
                  >
                    <i className="fa fa-pencil" />
                  </button>
                  <span>&nbsp;</span>
                  <button
                    onClick={() => this.onDelete(idx)}
                    type="button"
                    className="btn btn--link js-btn-trash"
                  >
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modalConfirm && (
          <Modal
            title="¿Seguro que desea eliminar?"
            onClose={() => this.modalClose()}
          >
            <div>
              <p className="text-center">
                <button
                  onClick={() => this.modalClose()}
                  className="btn btn--default"
                  type="button"
                >
                  Cancelar
                </button>
                <span>&nbsp;&nbsp;</span>
                <button
                  onClick={() => this.deleteConfirm()}
                  className="btn btn--primary"
                  type="button"
                >
                  Confirmar
                </button>
              </p>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

CrudTable.propTypes = propTypes;

export default CrudTable;
