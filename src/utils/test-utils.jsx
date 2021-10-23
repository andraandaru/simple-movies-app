import { render as rtlRender } from "@testing-library/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "../redux/reducers/movieReducer"

const render = (ui,
  {
    preloadedState,
    store = configureStore({ reducer: { movieReducer }, preloadedState }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from "@testing-library/react"
export { render }
