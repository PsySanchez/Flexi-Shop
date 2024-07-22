import { useSelector } from "react-redux";

export default function Modal() {
  const { title, text, btnSuccess, btnCancel } = useSelector(
    (state) => state.app.modal
  );
  console.log(title, text, btnSuccess, btnCancel);

  const style = {
    modal: {
      display: text ? "block" : "none",
    },
    dialog: {
      maxWidth: "500px",
      top: "20%",
    },
  };
  return (
    <div className="modal" style={style.modal}>
      <div className="modal-dialog" style={style.dialog}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{text}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {btnCancel}
            </button>
            <button type="button" className="btn btn-primary">
              {btnSuccess}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
