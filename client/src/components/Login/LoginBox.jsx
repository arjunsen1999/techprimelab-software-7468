import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function LoginBox() {
  return (
    <>
      <Box
        position={"absolute"}
        top={"210px"}
        left={"0px"}
        w="100%"
        minH={"100px"}
        display={{ base: "none", sm: "flex" }}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          p="60px 35px"
          bg="white"
          w="430px"
          minH={"100px"}
          borderRadius={"12px"}
          boxShadow={"#F3F5F7 0px 13px 8px -5px, #F3F5F7 0px 8px 8px -8px"}
        >
          <Box>
            {/* Heading start */}
            <Box mb="40px">
              <Text
                textAlign={"center"}
                fontWeight={"500"}
                fontSize={"19px"}
                color={"#666666"}
              >
                Login to get started
              </Text>
            </Box>
            {/* Heading end */}

            {/* Form start */}
            <form action="">
              <Box mb="30px">
                <FormControl>
                  <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                    Email
                  </FormLabel>
                  <Input type="email" />
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                </FormControl>
              </Box>

              <Box mb="5px">
                <FormControl>
                  <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input type="password" />
                    <InputRightElement cursor={"pointer"}>
                      <BsEyeSlash />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                </FormControl>
              </Box>

              <Stack
                mb="20px"
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"flex-end"}
              >
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Input
                  type="submit"
                  bg="#035FB2"
                  w="150px"
                  value={"Login"}
                  color={"white"}
                  borderRadius={"23px"}
                  cursor={"pointer"}
                />
              </Box>
            </form>
            {/* Form End */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
