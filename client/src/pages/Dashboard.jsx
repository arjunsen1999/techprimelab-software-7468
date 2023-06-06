import React from "react";
import SideBar from "../components/Navbar/SideBar";
import { Box, Heading } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import BottomBar from "../components/Navbar/BottomBar";
import Card from "../components/Dashboard/Card";
import ChartBox from "../components/Dashboard/ChartBox";

export default function Dashboard() {
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", md: "50px 1fr" }}
      >
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
            <Box>
              <Box
                mb="20px"
                overflowX={"scroll"}
                css={{
                  "&::-webkit-scrollbar": {
                    width: "0px",
                  },
                }}
                display={"flex"}
                gap={"30px"}
              >
                <Card number={8} title={"Total Projects"} />
                <Card number={3} title={"Close"} />
                <Card number={3} title={"Running"} />
                <Card number={2} title={"Closure Delay"} />
              </Box>

              <Box>
                <Box mb="20px">
                  <Heading color={"#404242"} as="h2" fontSize={"20px"}>
                    Department wise - Total Vs Close
                  </Heading>
                </Box>
                <Box>
                  <Box
                    bg="white"
                    w="650px"
                    borderRadius={"20px"}
                    minH={"350px"}
                    p="50px 20px 30px"
                  >
                    {/* Code here */}
                    <ChartBox />
                  </Box>
                </Box>
              </Box>
            </Box>
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
