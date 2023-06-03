import { Box } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/Navbar/SideBar";
import Header from "../components/Header/Header";
import ProjectListingBox from "../components/ProjectListing/ProjectListingBox";
import BottomBar from "../components/Navbar/BottomBar";

export default function ProjectListing() {
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", md: "50px 1fr" }}
      >
        <SideBar
          dashboard={"./Dashboard.svg"}
          projectList={"./Project-list-active.svg"}
          createProject={"./create-project.svg"}
        />

        <Box bg={"#F3F5F7"} position={"relative"}>
          <Box position={"absolute"} top={"0px"} left={"0px"} w="100%">
            <Header heading={"Project Listing"} icone={true} />
          </Box>
          {/* Start */}
          <Box px="25px" position={"relative"} zIndex={10} mt="110px" mb="20px">
            <Box>
              <ProjectListingBox />
            </Box>
          </Box>
          {/* End */}
          <BottomBar
            dashboard={"./Dashboard.svg"}
            projectList={"./Project-list-active.svg"}
            createProject={"./create-project.svg"}
          />
        </Box>
      </Box>
    </>
  );
}
