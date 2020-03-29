import React from "react"
import "./App.css"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import { MaterialTheme } from "../Styles/MaterialTheme"
import Landing from "./components/sections/Landing"
import Projects from "./components/sections/Projects"
import Navigation from "./components/Navigation"

function App() {
  return (
    <ThemeProvider theme={MaterialTheme}>
      <CssBaseline />
      <Navigation />
      <Landing />
      <Projects />
    </ThemeProvider>
  )
}

export default App
