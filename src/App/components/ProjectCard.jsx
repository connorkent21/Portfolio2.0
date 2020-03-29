import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import ContentItem from "./ContentItem"

const useStyles = makeStyles({
  root: {
    padding: "0px",
  },
  title: {
    fontWeight: 500,
    fontSize: "1.3rem",
  },
})

export default function ProjectCard(props) {
  const classes = useStyles()
  const { bg, liveLink, githubLink, title, description, img, buttons } = props

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <ContentItem fixedHeightLarge paper className={classes.root}>
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <div
          style={{
            background: `url(${img}) no-repeat`,
            backgroundSize: "70% auto",
            backgroundPosition: "center",
            backgroundColor: bg,
            boxShadow: "inset 0 0 5px rgba(0,0,0,0.5)",
          }}
          className="cardImage"
        />
        <div
          style={{
            padding: "12px",
            height: "50%",
            position: "relative",
          }}
        >
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <p className="cardDescription">{description}</p>
        </div>
        <div
          style={{
            height: "75px",
            position: isMobile ? "" : "absolute",
            top: isMobile ? "" : 475,
            display: "flex",
            padding: "12px",
          }}
        >
          {githubLink && (
            <Button color="secondary">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            </Button>
          )}

          {liveLink && (
            <Button color="secondary">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </Button>
          )}
          {buttons}
        </div>
      </div>
    </ContentItem>
  )
}
