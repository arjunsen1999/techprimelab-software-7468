import React from "react";
import SideBar from "../components/Navbar/SideBar";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";

export default function Dashboard() {
  return (
    <>
      <Box display={"grid"} gridTemplateColumns={"50px 1fr"}>
        <SideBar
          dashboard={"./Dashboard-active.svg"}
          projectList={"./Project-list.svg"}
          createProject={"./create-project.svg"}
        />
        <Box bg={"#F3F5F7"} position={"relative"}>
          <Box
    
            position={"absolute"}
            top={"0px"}
            left={"0px"}
            w="100%"
          >
           <Header heading={"Dashboard"} icone={false}/>
          </Box>
        </Box>
      </Box>
    </>
  );
}
