import { createGlobalStyle } from "styled-components"
import { Button } from "./components/atoms/Button"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ArrowButton } from "./components/atoms/ArrowButton"
const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family:'Source Sans Pro';
  }
`

function App() {
  return (
    <Router>
      <Route>
        <GlobalStyle />
        <div className="App">
          <h1>Hola mundo </h1>
          <Button arrowLeft>Most Recent</Button>
          <ArrowButton />
        </div>
      </Route>
    </Router>
  )
}

export default App
