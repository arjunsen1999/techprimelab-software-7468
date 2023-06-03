import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Header({ heading, icone }) {
  return (
    <>
      <Box
        backgroundImage={"./Header-bg.svg"}
        w="100%"
        h="150px"
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          top={"38%"}
          left={"30px"}
          transform={"translate(8px,-50%)"}
        >
          <Link to="/">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"25px"}
            >
              {icone ? (
                <MdArrowBackIosNew fontSize={"16px"} color="white" />
              ) : (
                ""
              )}
              <Text color={"white"} fontSize={"24px"} fontWeight={700}>
                {heading}
              </Text>
            </Box>
          </Link>
        </Box>

        <Box
          position={"absolute"}
          top={"38%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
        >
          <Image src="./Logo.svg" w="60px" />
        </Box>
      </Box>
    </>
  );
}
