import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Tooltip,
} from "@chakra-ui/react";

import {
  DiHtml5,
  DiCss3,
  DiGit,
  DiJsBadge,
  DiMongodb,
  DiNodejs,
  DiPhp,
  DiReact,
  DiWordpress,
} from "react-icons/di";

import theme from "../styles/theme";
import "../styles/About.css";

function About() {
  const years = new Date().getFullYear() - 2005;

  return (
    <Box
      pt="20vh"
      className="about_main"
      h="90vh"
      bg={theme.colors.background}
      color={theme.colors.text}
    >
      <Heading fontFamily={theme.fonts.heading} ml="5vw" mb={5}>
        About Me
      </Heading>
      <Text fontFamily={theme.fonts.body} ml="5vw" mb={5}>
        Hello! I'm a developer & problem solver based in Texas. I enjoy creating
        things and specialize in both front-end and back-end technologies.
      </Text>
      {/* {years >= 20 ? (
        <Text fontFamily={theme.fonts.body} ml="5vw" mr="3vw" mb={5}>
          I spent 20 years in the Air Force as an intelligence analyst, where
          using limited resources to develop answers for seemingly impossible
          problems is commonplace.
        </Text>
      ) : (
        <Text fontFamily={theme.fonts.body} ml="5vw" mr="3vw" mb={5}>
          I've spent {years} years in the Air Force as an intelligence analyst,
          where using limited resources to develop answers for seemingly
          impossible problems is commonplace.
        </Text>
      )} */}

      <Text fontFamily={theme.fonts.body} ml="5vw" mr="3vw" mb={5}>
        Years ago, I was tasked with maintaining a SharePoint site for my unit.
        After weeks of struggling, I knew there had to be a better way. I
        started teaching myself HTML, CSS, & JavaScript, and I've been
        passionate about development ever since!
      </Text>
      <Heading fontFamily={theme.fonts.heading} ml="5vw" mb={5}>
        Tech I Know
      </Heading>
      <Flex ml="5vw" className="about_list">
        <Box mr="2vw">
          <List>
            <ListItem>
              <ListIcon className="about_icon" as={DiHtml5} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="I mean...it's HTML"
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                HTML
              </Tooltip>
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiCss3} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="Bootstrap, & Tailwind"
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                CSS
              </Tooltip>
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiJsBadge} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="JQuery"
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                JavaScript
              </Tooltip>
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiReact} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="Next.js, React Router, Chakra UI"
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                React
              </Tooltip>
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiGit} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="GitHub, GitHub Desktop"
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                Git
              </Tooltip>
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <ListItem>
              <ListIcon className="about_icon" as={DiNodejs} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="Express, Axios, Morgan, Nodemon"
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                Node.js
              </Tooltip>
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiMongodb} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="MongoDB Compass, Atlas, Mongoose"
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                MongoDB
              </Tooltip>
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiPhp} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="Enough to survive..."
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                PHP
              </Tooltip>
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiWordpress} />
              <Tooltip
                hasArrow
                bg="green.500"
                color="gray.900"
                label="Oxygen Builder, ACF, CPT"
                placement="right"
                openDelay={100}
                closeDelay={100}
              >
                WordPress
              </Tooltip>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
