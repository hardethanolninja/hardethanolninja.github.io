import {
  Box,
  Heading,
  Text,
  Wrap,
  UnorderedList,
  ListItem,
  Center,
} from "@chakra-ui/react";

import theme from "../styles/theme";
import "../styles/Resume.css";

function Resume() {
  return (
    <Box
      className="resume_main"
      pt="20vh"
      pb="5vh"
      fontFamily={theme.fonts.body}
      bg={theme.colors.background}
      h="auto"
      color={theme.colors.text}
    >
      <Heading fontFamily={theme.fonts.heading} mb={5} textAlign="center">
        Work Experience
      </Heading>
      <Center>
        <Wrap ml={7} mr={3}>
          <Box
            pb={3}
            minWidth="350px"
            maxWidth="500px"
            padding="10px"
            borderRadius=".5rem"
            _hover={{ bgColor: "gray.700" }}
          >
            <Heading fontFamily={theme.fonts.heading} size="md" mb={2}>
              U.S. Air Force
            </Heading>
            <Text color="green.500">Master Sergeant</Text>
            <Text color={theme.colors.darkText} mb={2}>
              July 2005 - Present
            </Text>
            <UnorderedList>
              <ListItem>
                Directed day-to-day operations of 50+ member teams. Managed
                training requirements, organizational planning, & surety of $2M
                specialized analysis equipment.
              </ListItem>
              <ListItem>
                Managed relationships between multiple partner nations in
                support of global security & intelligence, surveillance, and
                reconnaissance operations.
              </ListItem>
              <ListItem>
                Subject matter expert for signals intelligence mission. Led
                analysis and reporting on over 1,500 unique threat systems
                deployed around the world.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box
            pb={3}
            minWidth="350px"
            maxWidth="500px"
            padding="10px"
            borderRadius=".5rem"
            _hover={{ bgColor: "gray.700" }}
          >
            <Heading fontFamily={theme.fonts.heading} size="md" mb={2}>
              Native Plant Society
              <br /> of Texas
            </Heading>
            <Text color="green.500">Web Developer</Text>
            <Text color={theme.colors.darkText} mb={2}>
              January 2022 - Present
            </Text>
            <UnorderedList>
              <ListItem>
                Devised various responsive WordPress sites from user design
                inputs, including features such as Custom Post Types, Advanced
                Custom Fields, and the WordPress API. Increased site stability
                and slashed load-time 75%.
              </ListItem>
              <ListItem>
                Diagnosed and troubleshot SQL database issues, developed back-up
                and restore solution for WordPress multi-site with 15,000 unique
                monthly users.
              </ListItem>
              <ListItem>
                Provided adequate training to 60+ users in internal web
                functions, including steps on how to make minor updates &
                changes independently.
              </ListItem>
            </UnorderedList>
          </Box>
        </Wrap>
      </Center>
      <Heading
        mt="8vh"
        fontFamily={theme.fonts.heading}
        mb={5}
        textAlign="center"
      >
        Education
      </Heading>
      <Center>
        <Wrap ml={7} mr={3}>
          <Box pb={3} minWidth="350px">
            <Heading fontFamily={theme.fonts.heading} size="md" mb={2}>
              Community College of <br /> The Air Force
            </Heading>
            <Text color={theme.colors.darkText} mb={2}>
              July 2007
            </Text>
            <Text>
              Communication
              <br /> Applications (AAS)
            </Text>
          </Box>
          <Box pb={3} minWidth="350px">
            <Heading fontFamily={theme.fonts.heading} size="md" mb={2}>
              Certifications
            </Heading>
            <UnorderedList>
              <ListItem>
                Build Responsive Websites (HTML & CSS)
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Jonas Schmedtmann - Udemy
                </ListItem>
              </ListItem>
              <ListItem>
                Complete Javascript Zero to Expert
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Jonas Schmedtmann - Udemy
                </ListItem>
              </ListItem>
              <ListItem>
                Complete Node.js, Express, and MongoDB Bootcamp
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Jonas Schmedtmann - Udemy
                </ListItem>
              </ListItem>
              <ListItem>
                Modern React Bootcamp
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Colt Steele - Udemy
                </ListItem>
              </ListItem>
              <ListItem>
                Become a WordPress Developer
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Brad Schiff - Udemy
                </ListItem>
              </ListItem>
            </UnorderedList>
          </Box>
        </Wrap>
      </Center>
    </Box>
  );
}

export default Resume;
