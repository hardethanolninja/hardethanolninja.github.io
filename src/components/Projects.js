import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  SimpleGrid,
  ModalCloseButton,
  ModalContent,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Link,
} from "@chakra-ui/react";

import insta from "../images/insta.webp";
import landscape from "../images/landscape.webp";

import "../styles/Projects.css";
import theme from "../styles/theme";

function Projects() {
  const {
    isOpen: instaIsOpen,
    onOpen: instaOnOpen,
    onClose: instaOnClose,
  } = useDisclosure();

  const {
    isOpen: landscapeIsOpen,
    onOpen: landscapeOnOpen,
    onClose: landscapeOnClose,
  } = useDisclosure();

  return (
    <>
      <Box
        pt="10vh"
        pb="5vh"
        className="projects_main"
        bgColor={theme.colors.background}
        color={theme.colors.text}
        h="auto"
      >
        <Heading fontFamily={theme.fonts.heading} pt={10} ml="10vw">
          Here are some projects I've worked on
        </Heading>
        <SimpleGrid
          pt={25}
          marginLeft="10vw"
          marginRight="10vw"
          columns={[1, 2, 3]}
          spacing="40px"
        >
          <Box
            className="projects_box"
            bgImage={insta}
            w="100%"
            h="200px"
            onClick={instaOnOpen}
          >
            <Text
              w="90%"
              fontSize="xs"
              className="text"
              ml="4px"
              mt="160px"
              pl="8px"
              bgColor="gray.800"
              color="green.500"
            >
              React, Tailwind, Firebase
            </Text>
          </Box>
          <Box
            className="projects_box"
            bgImage={landscape}
            w="100%"
            h="200px"
            onClick={landscapeOnOpen}
          >
            <Text
              w="90%"
              fontSize="xs"
              className="text"
              ml="4px"
              mt="160px"
              pl="8px"
              bgColor="gray.800"
              color="green.500"
            >
              Vanilla HTML, CSS, and JS with Bootstrap5
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Modal
        isOpen={instaIsOpen}
        onClose={instaOnClose}
        isCentered
        motionPreset="slideInBottom"
        size="3xl"
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader>Instagram Clone</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={{ base: "column", md: "row" }}>
              <Box
                bgImage={insta}
                minW={["200px", "400px"]}
                h="400px"
                bgPosition="50% 0%"
                bgSize="cover"
                borderWidth="2px"
                borderColor="gray.300"
                borderRadius="4"
              />
              <Flex ml="10px" direction="column">
                <Text mt="30px" mb="10px">
                  This project utilizes Firebase to authenticate users, and
                  provides data handling for user comments, following users, and
                  "liking" photos. It was created with React and uses Tailwind
                  CSS for styling.
                </Text>
                <Spacer />
                <Link
                  textAlign="center"
                  mb="10px"
                  fontSize="1em"
                  href="https://github.com/hardethanolninja/instagram-clone"
                >
                  GitHub Repo for this project
                </Link>
                <Link
                  textAlign="center"
                  mb="10px"
                  fontSize="0.7em"
                  color="gray.500"
                  href="https://youtu.be/mDgEqoQUBgk"
                >
                  Inspired by this tutorial
                </Link>
                <Link
                  textAlign="center"
                  mb="10px"
                  fontSize="1.2em"
                  color="green.600"
                  href="/insta-clone"
                >
                  Check out the Instagram Clone
                </Link>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={landscapeIsOpen}
        onClose={landscapeOnClose}
        isCentered
        motionPreset="slideInBottom"
        size="3xl"
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader>Lawn Care Website</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={{ base: "column", md: "row" }}>
              <Box
                bgImage={landscape}
                minW={["200px", "400px"]}
                h="400px"
                bgPosition="50% 0%"
                bgSize="cover"
                borderWidth="2px"
                borderColor="gray.300"
                borderRadius="4"
              />
              <Flex ml="10px" direction="column">
                <Text mt="30px" mb="10px">
                  This was a vanilla HTML, CSS, and JS website created with
                  Bootstrap5. I used this website to learn how to create a
                  website using Bootstrap. {<br />}It is a fully responsive,
                  mobile-first main page demo.
                </Text>
                <Spacer />
                <Link
                  textAlign="center"
                  mb="10px"
                  fontSize="1em"
                  href="https://github.com/hardethanolninja/lawn-service"
                >
                  GitHub Repo for this project
                </Link>
                <Link
                  textAlign="center"
                  mb="10px"
                  fontSize="1.2em"
                  color="green.600"
                  href="/lawn-service"
                >
                  Check out the Site
                </Link>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Projects;
