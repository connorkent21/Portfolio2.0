import React, { useState } from "react"
import classNames from "classnames"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"
import MailIcon from "@material-ui/icons/Mail"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
const HelperStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
  fab: {
    backgroundColor: "#7e77ca",
    "&:hover": {
      backgroundColor: "#7e77ca",
    },
  },
}))

const actions = [
  {
    icon: (
      <a href="mailto:connorkent21@gmail.com">
        <MailIcon />
      </a>
    ),
    name: "Email",
  },
  {
    icon: (
      <a
        href="https://github.com/connorkent21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="helperIcon" />,
      </a>
    ),
    name: "Github",
  },
  {
    icon: (
      <a
        href="https://www.linkedin.com/in/connorkent1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="helperIcon" />
      </a>
    ),
    name: "Linkedin",
  },
  {
    icon: (
      <a
        href="https://medium.com/@connorkent"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faMedium} className="helperIcon" />
      </a>
    ),
    name: "Medium",
  },
]

export default function Helper(props) {
  const classes = HelperStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <SpeedDial
      ariaLabel="Contact Helper"
      className={classNames(classes.speedDial)}
      icon={<SpeedDialIcon />}
      onClose={toggleOpen}
      onOpen={toggleOpen}
      open={open}
      color="secondary"
      direction={"up"}
      FabProps={{ className: theme.palette.type === "dark" && classes.fab }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  )
}
