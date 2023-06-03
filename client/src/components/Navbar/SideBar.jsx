import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SideBar({ dashboard, projectList, createProject }) {
  return (
    <>
      <Box minH="100vh" position={"relative"}>
        <Box
          w="50px"
          h="100vh"
          position={"fixed"}
          top={"0px"}
          left="0px"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap={"40px"}
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
        </Box>
      </Box>
    </>
  );
}
