//libraries
import { createGlobalStyle } from "styled-components"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
//components
import { Home } from "./components/pages/Home"
import { AppProvider } from "./context/GlobalStates"
import { PaginationProvider } from "./context/PaginationContext"
import { Modal } from "./components/organisms/Modal"
import { History } from "./components/pages/History"

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family:'Source Sans Pro',sans-serif;
    background-color: #f2f2f2;

  }

`

function App() {
  return (
    <AppProvider>
      <PaginationProvider>
        <GlobalStyle />
        <div className="App">
          <Router basename="/rewards-store">
            <Modal />
            <Switch>
              {/* <Route path="/rewards-store">
                <Redirect to="/" />
              </Route> */}
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/history" exact>
                <History />
              </Route>
            </Switch>
          </Router>
        </div>
      </PaginationProvider>
    </AppProvider>
  )
}

export default App
