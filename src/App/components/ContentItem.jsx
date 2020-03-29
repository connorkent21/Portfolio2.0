import React from "react"
import classNames from "classnames"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Skeleton from "@material-ui/lab/Skeleton"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import { LandingStyles } from "../../Styles/LandingStyles"

export default function ContentItem(props) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = LandingStyles()
  const {
    fullWidth,
    fullHeight,
    half,
    children,
    paper,
    fixedHeight,
    fixedHeightLarge,
    className,
    loading,
    centerContent,
    column,
    containerClass,
  } = props

  return (
    <Grid
      item
      xs={12}
      md={fullWidth ? 12 : 6}
      lg={fullWidth ? 12 : half ? 6 : 4}
      className={classNames(
        { [classes.centerContent]: centerContent },
        classes.contentItem,
        containerClass
      )}
    >
      {loading ? (
        <ContentSkeleton fixedHeightLarge={fixedHeightLarge} />
      ) : paper ? (
        <Paper
          className={classNames(
            {
              [classes.fixedHeight]: fixedHeight && !isMobile,
              [classes.fixedHeightLarge]: fixedHeightLarge && !isMobile,
              [classes.fullHeight]: fullHeight,
              [classes.centerContent]: centerContent,
              [classes.column]: column,
            },
            classes.paper,
            className
          )}
        >
          {children}
        </Paper>
      ) : (
        <div className={fixedHeight ? fixedHeight : ""}>{children}</div>
      )}
    </Grid>
  )
}

const ContentSkeleton = props => {
  const { fixedHeightLarge } = props
  const classes = LandingStyles()
  return (
    <div>
      <Skeleton
        variant="rect"
        width="25%"
        height={50}
        animation="wave"
        className={classes.skeletonTitle}
      />
      <Skeleton
        variant="rect"
        width="100%"
        height={fixedHeightLarge ? 400 : 250}
        animation="wave"
      />
    </div>
  )
}
