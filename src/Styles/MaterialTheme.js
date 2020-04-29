import { createMuiTheme } from "@material-ui/core/styles"

export function getThemeType(theme) {
  return createMuiTheme({
    palette: {
      type: theme.paletteType,
      background: {
        default: theme.paletteType === "light" ? "#fff" : "#222831",
        paper: theme.paletteType === "light" ? "#fff" : "#222831",
      },
      primary: { main: "#65c9ff" },
      secondary: { main: "#7e77ca" },
      contrastThreshold: 5,

      tonalOffset: 0.4,
    },
    typography: {
      fontFamily: ["Raleway"],
    },
  })
}
