import React from "react"
import Avatar from "avataaars"
import Typist from "react-typist"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Section from "../Section"
import ContentItem from "../ContentItem"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import { LandingStyles } from "../../../Styles/LandingStyles"

const contentStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
  },
}))

function Landing(props, ref) {
  const classes = LandingStyles()
  const contentClasses = contentStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      {isMobile && <div className={classes.appBarSpacer} />}
      <Section
        row
        contentClass={contentClasses.container}
        containerId="landing"
      >
        <ContentItem fullHeight centerContent half>
          <Typography variant="h1">Connor Kent</Typography>
          <Typography className={classes.code}>
            <Typist
              cursor={{
                show: true,
                blink: true,
                element: "|",
                hideWhenDone: true,
                hideWhenDoneDelay: 1000,
              }}
              avgTypingDelay={50}
            >
              $ Software Developer / Mechatronics Eng. @ UWaterloo
            </Typist>
          </Typography>
        </ContentItem>
        <ContentItem fullHeight centerContent half column>
          <Avatar
            style={{
              width: isMobile ? "20rem" : "23rem",
              height: isMobile ? "20rem" : "23rem",
            }}
            avatarStyle="Circle"
            topType="ShortHairShortWaved"
            accessoriesType="Prescription02"
            hairColor="BrownDark"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="Blue03"
            eyeType="Default"
            eyebrowType="DefaultNatural"
            mouthType="Default"
            skinColor="Light"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "32px",
              width: "100%",
            }}
          >
            <a
              href="https://github.com/connorkent21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                className={
                  theme.palette.type === "dark" ? "faIconDark" : "faIcon"
                }
              />
            </a>
            <a
              href="https://www.linkedin.com/in/connorkent1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={
                  theme.palette.type === "dark" ? "faIconDark" : "faIcon"
                }
              />
            </a>
            <a
              href="https://medium.com/@connorkent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faMedium}
                className={
                  theme.palette.type === "dark" ? "faIconDark" : "faIcon"
                }
              />
            </a>
          </div>
        </ContentItem>
      </Section>
    </>
  )
}

export default Landing
