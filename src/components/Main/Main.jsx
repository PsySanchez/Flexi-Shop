import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Router from "../Router/Router";
import Sidebar from "../Sidebar/Sidebar";
import Alert from "../Alert/Alert";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../../actions/authAction";

import "./Main.css";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const { text, type } = useSelector((state) => state.app.alert);
  const modal = useSelector((state) => state.app.modal);
  const { loading } = useSelector((state) => state.app);

  return (
    <BrowserRouter>
      {modal && <Modal />}

      <Header />
      <main>
        <Sidebar />
        <div className="router">
          {loading && <Loader />}
          {text && <Alert text={text} className={type} />}
          <Router />
        </div>
      </main>
    </BrowserRouter>
  );
}
