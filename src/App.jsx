import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Main from "./components/Main/Main";
import { reducer } from "./redux/reducer";
import { sagaWatcher } from "./redux/sagas";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

saga.run(sagaWatcher);

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
