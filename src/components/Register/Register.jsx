import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/authAction";

export default function Register() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    userName: "",
    password: "",
    email: "",
    checkbox: false,
    hasError: true,
  });

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(register(form));
  };

  const changeInputHandler = (event) => {
    const { name, value } = event.target;

    if (name === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: !prev.checkbox }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    
    setForm((prev) => ({
      ...prev,
      hasError: !(
        prev.userName.length > 3 &&
        prev.password.length > 3 &&
        prev.email.includes("@") &&
        prev.checkbox === true
      ),
    }));
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="col-md-10">
        <label htmlFor="userName" className="form-label">
          User name
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
      <div className="col-md-10">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          value={form.email}
          name="email"
          placeholder="Enter your email"
          onChange={changeInputHandler}
        />
      </div>
      <div className="col-md-10 checkbox-wrapper">
        <input
          className="form-check-input mt-0"
          id="checkbox"
          type="checkbox"
          value={form.checkbox}
          name="checkbox"
          aria-label="approve privacy policy"
          onChange={changeInputHandler}
        />
        <label htmlFor="email" className="form-label">
          Approve&nbsp;
          <a href="https://www.w3schools.com" target="_blank">
            privacy policy
          </a>
        </label>
      </div>
      <button
        className="btn btn-primary"
        disabled={form.hasError}
        onClick={submitHandler}
      >
        Register
      </button>
    </form>
  );
}
