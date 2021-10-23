import React from "react"
import ReactDOM from "react-dom"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "react-toastify/dist/ReactToastify.css"
import App from "./App"
import { ToastContainer } from "react-toastify"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./redux/reducers/movieReducer"
const globalStore = configureStore({
  reducer: {
    movieReducer,
  },
})

ReactDOM.render(
  <Provider store={globalStore}>
    <Router>
      <App />
      <ToastContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
)
