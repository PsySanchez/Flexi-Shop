import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Router from "../Router/Router";
import Sidebar from "../Sidebar/Sidebar";
import Alert from "./Alert";
import Modal from "../Modal/Modal";

import "./Main.css";

export default function Main() {
  const { text, type } = useSelector((state) => state.app.alert);
  const modal = useSelector((state) => state.app.modal);

  return (
    <BrowserRouter>
      {modal && <Modal />}

      <Header />
      <main>
        <Sidebar />
        <div className="router">
          {text && <Alert text={text} className={type} />}
          <Router />
        </div>
      </main>
    </BrowserRouter>
  );
}
