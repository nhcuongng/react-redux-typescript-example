import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, rootReducer } from "./reducers";
import "./App.css";
import { Toggle } from "./components";

/**
 * Tạo store
 * @param rootReducer tat ca reducer de tao state moi
 * @param initialState state khởi tạo ban đầu
 */
const store = createStore(rootReducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello World</h1>
        <p>A simple toggle:</p>
        <Toggle />
      </div>
    </Provider>
  );
}

export default App;