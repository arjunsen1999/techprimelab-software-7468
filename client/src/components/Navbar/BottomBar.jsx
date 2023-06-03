import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function BottomBar({ dashboard, projectList, createProject }) {
  return (
    <>
      <Box
        // mt={"20px"}

        position={"relative"}
        h="50px"
        display={{ base: "block", md: "none" }}
        bg="white"
        // border={"1px solid red"}
        borderRadius={"20px"}
      >
        <Box
          w="100%"
          h="50px"
          position={"absolute"}
          bottom={"0px"}
          left="0px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"30px"}
          // display={{base:"none", md : "block"}}
          //   borderRadius={"60px"}
        >
          <Link to="/">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w="40px"
              h="40px"
            >
              <Image src={dashboard} />
            </Box>
          </Link>
          <Link to="/create-project">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w="40px"
              h="40px"
            >
              <Image src={createProject} />
            </Box>
          </Link>
          <Link to="/project-list">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w="40px"
              h="40px"
            >
              <Image src={projectList} />
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
}
