import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers";
import "./App.css";
import { Toggle, Person } from "./components";

/**
 * Tạo store
 * @param rootReducer tat ca reducer de tao state moi
 * @param initialState state khởi tạo ban đầu
 */
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <div className="App">
        <div>
          <h2>Example 1:</h2>
          <p>A simple toggle:</p>
          <Toggle />
        </div>
        <hr />
        <div>
          <h2>Example 2:</h2>
          <p>A simple add/remove person</p>
          <Person />
        </div>
      </div>
    </Provider>
  );
}

export default App;