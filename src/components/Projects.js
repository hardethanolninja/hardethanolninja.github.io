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
  ModalFooter,
  ModalBody,
  Button,
  Link,
} from "@chakra-ui/react";

import insta from "../images/insta.webp";

import "../styles/Projects.css";
import theme from "../styles/theme";

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            onClick={onOpen}
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
        </SimpleGrid>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="3xl"
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader>Instagram Clone</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex">
              <Box
                bgImage={insta}
                minW="400px"
                h="400px"
                bgPosition="50% 0%"
                bgSize="cover"
                borderWidth="2px"
                borderColor="gray.600 60%"
                borderRadius="4"
              />
              <Flex ml="10px" direction="column">
                <Text mt="30px">
                  This project utilizes Firebase to authenticate users, and
                  provides data handling for user comments, following users, and
                  "liking" photos. It was created with React and uses Tailwind
                  CSS for styling.
                </Text>
                <Spacer />
                <Link
                  textAlign="center"
                  mb="10px"
                  fontSize="1.2em"
                  color="green.600"
                  href="https://www.lienhard.dev/insta-clone"
                >
                  Check out the Instagram Clone
                </Link>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Projects;
