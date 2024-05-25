import React from "react";

function ImageModal(props) {
  if (!props.show) {
    return null;
  } else {
    return (
      <div
        className={`modal ${props.show ? "show" : ""}`}
        onClick={props.onClose}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Modal Title</h4>
          </div>
          <div className="modal-body">Modal Body</div>
          <div className="modal-footer">
            <button className="button">Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageModal;
