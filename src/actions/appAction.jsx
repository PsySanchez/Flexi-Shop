import {
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_MODAL,
  HIDE_MODAL,
} from "../types/reduxTypes";

import { PRIMARY } from "../types/alertTypes";

export function showAlert(text = "", type = PRIMARY) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
    payload: { text: null, type: null },
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
    payload: true,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
    payload: false,
  };
}

export function showModal(props) {
  return {
    type: SHOW_MODAL,
    payload: { ...props },
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
    payload: { text: null, modalType: null },
  };
}
