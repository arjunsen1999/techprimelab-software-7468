import { Box } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/Navbar/SideBar";
import Header from "../components/Header/Header";

export default function CreateProject() {
  return (
    <>
      <Box display={"grid"} gridTemplateColumns={"50px 1fr"}>
        <SideBar
          dashboard={"./Dashboard.svg"}
          projectList={"./Project-list.svg"}
          createProject={"./create-project-active.svg"}
        />
        <Box bg={"#F3F5F7"} position={"relative"}>
          <Box
          
            position={"absolute"}
            top={"0px"}
            left={"0px"}
            w="100%"
          >
            <Header heading={"Create Project"} icone={true} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
