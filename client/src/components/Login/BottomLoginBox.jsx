import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function BottomLoginBox() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/")
  };
  return (
    <>
      <Box
        w="100%"
        mt="40px"
        px="20px"
        display={{ base: "block", sm: "none" }}
      >
        <Box>
          {/* Heading start */}
          <Box mb="40px">
            <Text
              textAlign={"left"}
              fontWeight={"500"}
              fontSize={"19px"}
              color={"#666666"}
            >
              Login to get started
            </Text>
          </Box>
          {/* Heading end */}

          {/* Form start */}
          <form action="" onSubmit={handleSubmit}>
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
            >
              <Text textAlign={"right"} color={"blue.400"}>Forgot password?</Text>
            </Stack>

            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Input
                type="submit"
                bg="#035FB2"
                value={"Login"}
                w="100%"
                color={"white"}
                borderRadius={"23px"}
                cursor={"pointer"}
              />
            </Box>
          </form>
          {/* Form End */}
        </Box>
      </Box>
    </>
  );
}
