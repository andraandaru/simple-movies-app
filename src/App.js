import { CssBaseline } from "@mui/material"
import { Switch, Route } from "react-router-dom"
import DetailPage from "./pages/detail"
import HomePage from "./pages/home"
import NotFound from './pages/404'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={DetailPage} path="/detail/:imdbID" />
        <Route component={NotFound} path="*" />
      </Switch>
    </>
  )
}

export default App
