import { useState } from "react";

export default function Sidebar() {
  const [style, setStyle] = useState({
    position: "fixed",
    height: "500px",
    width: "150px",
    backgroundColor: "#adadad",
    padding: "20px",
    zIndex: "1000",
    marginTop: "16px",
    button: {
      position: "absolute",
      top: "0",
      right: "-42px",
    },
  });

  const closeHandler = () => {
    setStyle((prev) => ({
      ...prev,
      left: prev.left === "0px" ? "-150px" : "0px",
    }));
  };

  return (
    <div style={style}>
      <button
        style={style.button}
        type="button"
        className="btn btn-outline-primary"
        onClick={closeHandler}
      >
        <i className="bi bi-arrow-left-right"></i>
      </button>
      <p>1 text</p>
      <p>2 text</p>
      <p>3 text</p>
      <p>4 text</p>
      <p>5 text </p>
    </div>
  );
}
