import {
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  SHOW_MODAL,
  HIDE_MODAL,
} from "../types/reduxTypes";

const initialState = {
  loading: false,
  alert: {
    text: null,
    type: null,
  },
  modal: {
    title: null,
    text: null,
    btnSuccess: null,
    btnCancel: null,
    width: "400px",
    successCliced: false,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: action.payload };
    case SHOW_MODAL:
      return { ...state, modal: action.payload };
    case HIDE_MODAL:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};
