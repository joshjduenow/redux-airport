import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


/** TODO: Create store */

const airlines = (state=[], action) => {

    return state
}

const airlineStore = createStore(
    combineReducers({
        airlines
    })
)

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={airlineStore}>
    <App />
    </Provider>
  </React.StrictMode>
);
