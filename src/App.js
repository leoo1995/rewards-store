//libraries
import { createGlobalStyle } from "styled-components"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
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
          <Router>
            <Modal />
            <Switch>
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
