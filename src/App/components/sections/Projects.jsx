import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import Section from "../Section"
import ProjectCard from "../ProjectCard"

const projectsStyles = makeStyles(theme => ({
  section: {
    backgroundColor: "#dedede4d",
  },
}))

export default function Projects() {
  const contentStyles = projectsStyles()

  return (
    <Section
      row
      contentClass={contentStyles.section}
      title="Projects"
      containerId="projects"
    >
      <ProjectCard
        bg="#367BF9"
        title="SoundShare"
        description="SoundShare is a platform for studio musicians, bedroom producers, and music enthusiasts to collaborate regardless of geographical location. 
                    Users will be able to host projects and have their friends or colleagues add content to that project. This gives creatives a way of furthering
                    their art without having to travel to record with their bandmates."
        img="https://res.cloudinary.com/ckportfolio/image/upload/v1568557903/Screenshot_from_2019-09-15_10-30-29.png"
      />
      <ProjectCard
        title="VSTech SmartPatrol Portal"
        img="https://res.cloudinary.com/ckportfolio/image/upload/v1581883600/vstech/vsp-logo.png"
        description="VSTech's SmartPatrol computer-vision technology provides real-time monitoring of high risk zones at ski resorts to reduce preventable accidents and provide better incident reporting and usage statistics for report operators. I designed a client facing web portal to give users useful insights about the data being captured."
        buttons={
          <Button color="secondary">
            <a
              href="https://www.visionspatialtech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </Button>
        }
      />
      <ProjectCard
        bg="rgba(23, 23, 42, 0.9)"
        title="Extra2048"
        img="https://res.cloudinary.com/ckportfolio/image/upload/v1585491813/Portfolio2.0/Screenshot_from_2020-03-29_07-19-45.png"
        description="Extra2048 recreates the classic game but its extra. This version using a new age dark themed UI and allows players to choose from a variety of different number bases. Fun for the whole family!"
        githubLink="https://github.com/connorkent21/Extra2048"
      />
      <ProjectCard
        bg="#65c9ff"
        img="https://res.cloudinary.com/ckportfolio/image/upload/v1585494758/Portfolio2.0/cochlear.png"
        title="Cochlear Implant Simulation"
        description="This cochlear implant simulation demonstrates various signal processing techniques. It works by filtering a given signal over n number of bands using IIR filtering, generating envelopes using lowpass filtering and stitching samplez back together using amplitude modulation."
        githubLink="https://github.com/connorkent21/cochlear-simulation"
      />
      <ProjectCard
        bg="#000"
        img="https://res.cloudinary.com/ckportfolio/image/upload/v1585496689/Portfolio2.0/snake.jpg"
        title="LPC1760 Snake"
        description="A snake game written in C to run on the ARM based LPC1760. This game demonstrates elements of real-time programming by implementing various threads managed by a series of semaphores. This game makes use of several peripherals such as an LCD, LEDs, Push Buttons and a joystick."
        githubLink="https://github.com/connorkent21/LPCSnake"
      />
      <ProjectCard
        bg="#fff"
        img="https://res.cloudinary.com/ckportfolio/image/upload/v1585496509/Portfolio2.0/mcb1700_board.jpg"
        title="Real-time Messaging Queue Implementation"
        description="An implementation of message queuing simulating communication between server and clients using the LPC1760 board. This code creates multiple client/server threads and manages their communication to ensure a steady flow of messages being processed from each client."
        githubLink="https://github.com/connorkent21/LPCMessagingQueues"
      />
    </Section>
  )
}
