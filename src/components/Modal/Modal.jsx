import { useSelector } from "react-redux";
import { logout } from "../../actions/authAction";
import { showModal } from "../../actions/appAction";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, text, btnSuccess, btnCancel } = useSelector(
    (state) => state.app.modal
  );

  const handleSuccess = () => {
    dispatch(logout());
    dispatch(
      showModal({ text: null, title: null, btnSuccess: null, btnCancel: null })
    );
    navigate("/");
  };

  const handleCancel = () => {
    dispatch(
      showModal({ text: null, title: null, btnSuccess: null, btnCancel: null })
    );
  };

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
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> */}
          </div>
          <div className="modal-body">
            <p>{text}</p>
          </div>
          <div className="modal-footer">
            <Button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCancel}
            >
              {btnCancel}
            </Button>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={handleSuccess}
            >
              {btnSuccess}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
