import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"
import Switch from "@material-ui/core/Switch"
import { useTheme } from "@material-ui/core/styles"

import Brightness5Icon from "@material-ui/icons/Brightness5"
import Brightness3Icon from "@material-ui/icons/Brightness3"

const navStyles = makeStyles((theme) => ({
  appbar: {
    background: "transparent",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}))

const THEME_TYPES = ["dark", "light"]

export default function Navigation(props) {
  const classes = navStyles()
  const theme = useTheme()
  const { updateTheme } = props

  const handleThemeChange = (event) => {
    updateTheme(THEME_TYPES[Number(event.target.checked)])
  }

  const handleScrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appbar}
      >
        <Toolbar>
          <div style={{ flexGrow: 1, padding: "10px" }}>
            <img
              src="https://res.cloudinary.com/ckportfolio/image/upload/v1585419743/Portfolio2.0/avataaars.png"
              alt="vstech-logo"
              className="toolbarIcon"
              onClick={() => handleScrollTo("landing")}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {theme.palette.type === "light" ? (
              <Brightness5Icon color="secondary" />
            ) : (
              <Brightness3Icon />
            )}
          </div>
          <nav>
            <Switch
              onChange={handleThemeChange}
              checked={theme.palette.type === "light"}
            />
            <Button
              variant="text"
              color="secondary"
              className={classes.link}
              onClick={() => handleScrollTo("projects")}
            >
              Projects
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  )
}
