import React from "react";
import SideBar from "../components/Navbar/SideBar";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import BottomBar from "../components/Navbar/BottomBar";

export default function Dashboard() {
  return (
    <>
      <Box display={"grid"}   gridTemplateColumns={{ base: "1fr", md: "50px 1fr" }}>
        <SideBar
          dashboard={"./Dashboard-active.svg"}
          projectList={"./Project-list.svg"}
          createProject={"./create-project.svg"}
        />
        <Box bg={"#F3F5F7"} position={"relative"}>
          <Box position={"absolute"} top={"0px"} left={"0px"} w="100%">
            <Header heading={"Dashboard"} icone={false} />
          </Box>
          {/* Start */}
          <Box px="25px" position={"relative"} zIndex={10} mt="110px" mb="20px">
            <Box border={"1px solid black"}></Box>
          </Box>
          {/* End */}
          <BottomBar
           dashboard={"./Dashboard-active.svg"}
           projectList={"./Project-list.svg"}
           createProject={"./create-project.svg"}
        />
        </Box>
      </Box>
    </>
  );
}
