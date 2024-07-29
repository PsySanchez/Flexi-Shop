import { useSelector } from "react-redux";
import { showModal } from "../../actions/appAction";
import { useDispatch } from "react-redux";

export default function Modal() {
  const dispatch = useDispatch();

  const { title, text, btnSuccess, btnCancel, width } = useSelector(
    (state) => state.app.modal
  );

  const handleSuccess = () => {
    dispatch(
      showModal({
        successCliced: true,
      })
    );
  };

  const handleCancel = () => {
    dispatch(showModal({}));
  };

  const style = {
    modal: {
      display: text ? "block" : "none",
    },
    dialog: {
      width: width,
      top: "20%",
    },
  };

  if (!text) {
    return <> </>;
  }

  return (
    <div className="modal" style={style.modal}>
      <div className="modal-dialog" style={style.dialog}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>
          <div className="modal-body">
            <p>{text}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCancel}
            >
              {btnCancel}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSuccess}
            >
              {btnSuccess}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
