import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 0

export const LandingStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: `${theme.zIndex.drawer + 1} !important`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px) !important`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: "auto",
    // backgroundColor: "#efeefe",
  },
  container: {
    height: "100%",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  contentLayoutContent: {
    height: "inherit",
    position: "relative",
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create("marginLeft", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grid: {
    minHeight: "100vh",
    padding: "32px",
  },
  flexRow: {
    flexDirection: "row",
  },
  centerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },
  contentLayoutContentClosed: {
    transition: theme.transitions.create("marginLeft", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(9),
    },
  },
  contentItem: {
    padding: theme.spacing(2),
    position: "relative",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fullHeight: {
    height: "100%",
  },
  fixedHeight: {
    height: 350,
  },
  fixedHeightLarge: {
    height: 550,
  },
  centerGrid: {
    justifyContent: "center",
  },
  bottomItems: {
    marginTop: "auto !important",
  },
  skeletonTitle: {
    marginBottom: theme.spacing(1),
  },
  code: {
    fontFamily: "'Source Code Pro', monospace",
    color: "rgba(0,0,0,0.5)",
    fontSize: "1.1rem",
  },
}))
