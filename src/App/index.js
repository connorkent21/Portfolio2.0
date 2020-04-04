import React, { useState } from "react"
import "./App.css"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import { getThemeType } from "../Styles/MaterialTheme"
import Landing from "./components/sections/Landing"
import Projects from "./components/sections/Projects"
import Navigation from "./components/Navigation"
import Helper from "./components/Helper"

function App() {
  const [theme, setTheme] = useState(getThemeType({ paletteType: "light" }))
  const handleThemeChange = (type) => {
    setTheme(getThemeType({ paletteType: type }))
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "relative" }}>
        <CssBaseline />
        <Navigation updateTheme={handleThemeChange} />
        <Landing />
        <Projects />
        <Helper />
      </div>
    </ThemeProvider>
  )
}

export default App
