import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authAction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { showLoader } from "../../actions/appAction";

export default function Login() {
  // const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.app.loading);
  // username: "mor_2314",
  // password: "83r5^_",
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName: "",
    password: "",
    hasError: true,
  });

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user]);

  const submitHandler = (event) => {
    event.preventDefault();

    const { userName, password } = form;
    dispatch(showLoader());
    dispatch(login(userName, password));
  };

  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setForm((prev) => ({
      ...prev,
      hasError: !prev.userName.trim() || !prev.password.trim(),
    }));
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="col-md-10">
        <label htmlFor="userName" className="form-label">
          Login
        </label>
        <input
          type="text"
          className="form-control"
          id="userName"
          value={form.userName}
          name="userName"
          placeholder="Enter your user name"
          onChange={changeInputHandler}
        />
      </div>
      <div className="col-md-10">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          id="password"
          value={form.password}
          name="password"
          placeholder="Enter your password"
          onChange={changeInputHandler}
        />
      </div>
      <button
        className="btn btn-primary"
        disabled={loading || form.hasError}
        onClick={submitHandler}
      >
        Login
      </button>
    </form>
  );
}
