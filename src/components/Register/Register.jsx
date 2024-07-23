import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/authAction";
import Button from "../Button/Button";
import { PRIMARY } from "../../types/buttonTypes";

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
    switch (name) {
      case "userName":
        setForm((prev) => ({ ...prev, userName: value }));
        break;
      case "password":
        setForm((prev) => ({ ...prev, password: value }));
        break;
      default:
        break;
    }

    setForm((prev) => ({
      ...prev,
      hasError: !prev.userName.trim() || !prev.password.trim(),
    }));
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="mb-3">
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
      <div className="mb-3">
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
      <div className="mb-3">
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
      <div className="mb-3 checkbox-wrapper">
        <input
          className="form-check-input mt-0"
          id="email"
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
      <Button
        className={PRIMARY}
        disabled={form.hasError}
        isActive={!form.hasError}
        onClick={submitHandler}
      >
        Login
      </Button>
    </form>
  );
}
