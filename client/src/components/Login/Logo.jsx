import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Logo() {
  return (
    <>
      <Box
        marginTop={"68px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"17px"}
        >
          <Box>
            <Image src="./Logo.svg" />
          </Box>
          <Box>
            <Text color={"white"}>Online Project Management</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
