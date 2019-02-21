import React, { Component } from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";

import Modal from "./Modal";

const propTypes = {
  film: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

const defaultProps = {
  film: {}
};

class ModalFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {
        id: "",
        name: "",
        date: "",
        available: ""
      }
    };
  }

  componentDidMount() {
    const { film } = this.props;
    if (film.id) {
      this.setState({ film });
    } else {
      this.generateId();
    }
  }

  generateId() {
    const { film } = this.state;
    const clonFilm = { ...film };
    clonFilm.id = nanoid(5);
    this.setState({ film: clonFilm });
  }

  onSave(e) {
    e.preventDefault();
    const { film } = this.state;
    const { onSave, typeModal } = this.props;
    onSave(film, typeModal);
  }

  onClose() {
    const { onClose } = this.props;
    onClose();
  }

  handleInput(e) {
    const { film } = this.state;
    const { id, value } = e.target;
    const clonFilm = { ...film };
    clonFilm[id] = id === "available" ? parseInt(value, 0) : value;
    this.setState({ film: clonFilm });
  }

  render() {
    const { title } = this.props;
    const { film } = this.state;
    return (
      <Modal title={title} onClose={() => this.onClose()}>
        <form onSubmit={e => this.onSave(e)} style={{ marginBottom: "2rem" }}>
          <label className="form-group" htmlFor="name">
            <div className="form-group__label">Nombre de la película</div>
            <input
              value={film.name}
              onChange={e => this.handleInput(e)}
              id="name"
              className="form-input"
              type="text"
              required
            />
          </label>
          <label className="form-group" htmlFor="name">
            <div className="form-group__label">Fecha de publicación</div>
            <input
              value={film.date}
              onChange={e => this.handleInput(e)}
              id="date"
              className="form-input"
              type="date"
              required
            />
          </label>
          <label className="form-group" htmlFor="name">
            <div className="form-group__label">Estado</div>
            <select
              value={film.available}
              onChange={e => this.handleInput(e)}
              id="available"
              className="form-input"
              required
            >
              <option value="">Selecionar</option>
              <option value={1}>Activo</option>
              <option value={0}>Inactivo</option>
            </select>
          </label>
          <p className="text-center">
            <button className="btn btn--primary" type="submit">
              Guardar
            </button>
          </p>
        </form>
      </Modal>
    );
  }
}

ModalFilm.propTypes = propTypes;
ModalFilm.defaultProps = defaultProps;

export default ModalFilm;
