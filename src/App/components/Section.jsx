import React from "react"
import classNames from "classnames"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { LandingStyles } from "../../Styles/LandingStyles"

const sectionStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    backgroundColor: "blue",
  },
  title: {
    padding: "32px",
  },
}))

function Section(props, ref) {
  const { children, centered, row, contentClass, title, containerId } = props
  const classes = LandingStyles()
  const sectionClasses = sectionStyles()

  return (
    <main
      className={classNames(classes.content, contentClass)}
      id={containerId}
    >
      <Container maxWidth="xl" className={classes.container}>
        <div className={classes.contentLayoutContent}>
          {title && (
            <Typography variant="h3" className={sectionClasses.title}>
              {title}
            </Typography>
          )}
          <Grid
            container
            spacing={3}
            className={classNames(
              { [classes.centerGrid]: centered, [classes.flexRow]: row },
              classes.grid
            )}
          >
            {children}
          </Grid>
        </div>
      </Container>
    </main>
  )
}

export default Section
