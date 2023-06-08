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
        h={{base :"80px", md:"154px"}}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={{base:"center", md : "center"}}
        backgroundSize={{base:"cover", md:"cover"}}
        position={"relative"}
        borderRadius={{base:"0px 0px 0px 30px", md: "0"}}
      >
        <Box
          position={"absolute"}
          top={{base:"37px", md: "38%"}}
          left={"30px"}
          transform={"translate(8px,-50%)"}
       
        >
          <Link to="/">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={{base:"20px", md:"25px"}}
            >
              {icone ? (
                <MdArrowBackIosNew fontSize={"16px"} color="white" />
              ) : (
                ""
              )}
              <Text color={"white"} fontSize={{base:"20px", md:"24px"}} fontWeight={700}>
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
          display={{base:"none", md : "block"}}
        >
          <Image src="./Logo.svg" w="60px" />
        </Box>
         <Box  position={"absolute"}
          top={"47%"}
          right={"10px"}
          transform={"translate(-50%,-50%)"}
          display={{base:"block", md : "none"}}>
            <Link to="/login"><Image src="./Logout.svg" w="35px" h="35px"/></Link>
         </Box>
      </Box>
    </>
  );
}
