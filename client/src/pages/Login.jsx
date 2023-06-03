import { Box } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Login/Logo";
import LoginBox from "../components/Login/LoginBox";
import BottomLoginBox from "../components/Login/BottomLoginBox";

export default function Login() {
  return (
    <>
      <Box
        w="100%"
        minH={{base : "100vh", sm : "130vh"}}
        display={"grid"}
        gridTemplateRows={{base : "1.4fr 2fr", sm : "1fr 1fr"}}
        position={"relative"}
      >
        <Box
          backgroundImage={"./login-bg-1.svg"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          borderRadius={"0px 0px 0px 70px"}
        >
           <Logo />
        </Box>
        <Box><BottomLoginBox /></Box>
        <LoginBox />
      </Box>
    </>
  );
}
