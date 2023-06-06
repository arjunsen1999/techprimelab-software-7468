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
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function BottomLoginBox() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: false,
    password: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email === "") {
      setFormError((prev) => {
        return {
          ...prev,
          email: true,
        };
      });
      return;
    } else {
      setFormError((prev) => {
        return {
          ...prev,
          email: false,
        };
      });
    }
    if (formData.password === "") {
      setFormError((prev) => {
        return {
          ...prev,
          password: true,
        };
      });
      return;
    } else {
      setFormError((prev) => {
        return {
          ...prev,
          password: false,
        };
      });
    }

    // navigate("/");
  };
  return (
    <>
      <Box w="100%" mt="40px" px="20px" display={{ base: "block", sm: "none" }}>
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
          <form action="" >
            <Box mb="30px">
              <FormControl isInvalid={formError.email}>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Email
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>Email is required.</FormErrorMessage>
              </FormControl>
            </Box>

            <Box mb="5px">
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <InputRightElement cursor={"pointer"} onClick={handleClick}>
                    {show ? <BsEye /> : <BsEyeSlash />}
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>Password is required.</FormErrorMessage>
              </FormControl>
            </Box>

            <Stack mb="20px">
              <Text textAlign={"right"} color={"blue.400"}>
                Forgot password?
              </Text>
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
                onClick={handleSubmit}
              />
            </Box>
          </form>
          {/* Form End */}
        </Box>
      </Box>
    </>
  );
}
