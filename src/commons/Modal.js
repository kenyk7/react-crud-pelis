import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
};

class Modal extends Component {
  onClose() {
    const { onClose } = this.props;
    onClose();
  }
  render() {
    const { title, children } = this.props;
    return (
      <div className="modal">
        <div className="modal__dialog animated pulse">
          <div className="modal__body">
            <button
              onClick={() => this.onClose()}
              type="button"
              className="close"
            >
              &times;
            </button>
            <h2 className="modal__title text-center">{title}</h2>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;
