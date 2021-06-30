import { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { AppProvider } from "./context/GlobalStates"
import { PaginationProvider } from "./context/PaginationContext"
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
        <Router>
          <GlobalStyle />
          <div className="App">
            <Route path="/" exact>
              <Home />
            </Route>
          </div>
        </Router>
      </PaginationProvider>
    </AppProvider>
  )
}

export default App
