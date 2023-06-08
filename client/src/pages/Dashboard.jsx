import React, { useEffect, useState } from "react";
import SideBar from "../components/Navbar/SideBar";
import { Box, Heading } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import BottomBar from "../components/Navbar/BottomBar";
import Card from "../components/Dashboard/Card";
import ChartBox from "../components/Dashboard/ChartBox";
import axios from "axios";
import StatusLoading from "../loading-page/dashboard/StatusLoading";

export default function Dashboard() {
  const [projectStatus, setProjectStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProjectStatus = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/project/status`
      );
      setProjectStatus(data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getProjectStatus();
  }, []);
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
              {isLoading ? (
                <StatusLoading />
              ) : (
                <Box
                  mb="20px"
                  position={"relative"}
                  overflowX={"scroll"}
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "0px",
                    },
                  }}
                  display={"grid"}
                  gridTemplateColumns={{base:"200px 200px 200px 200px 200px", md : "1fr 1fr 1fr 1fr 1fr"}}
                  gap={"30px"}
                  minH="110px"
                >
                  {projectStatus?.map((ele, idx) => (
                    <Card number={ele.count} title={ele.title} key={idx} />
                  ))}
                </Box>
              )}

              <Box>
                <Box mb="20px">
                  <Heading color={"#404242"} as="h2" fontSize={"20px"}>
                    Department wise - Total Vs Close
                  </Heading>
                </Box>
                <Box>
                  <Box
                    bg="white"
                    w={{base : "100%", md : "650px"}}
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
