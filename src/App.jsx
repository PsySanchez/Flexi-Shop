import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Main from "./components/Main/Main";
import { reducer } from "./redux/reducer";

const store = configureStore({
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(historyMiddleware),
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
