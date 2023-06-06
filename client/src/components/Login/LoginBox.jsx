import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/Auth.action";
import notification from "../../Toast";
import { user_login_reset } from "../../redux/auth/Auth.actionTypes";

export default function LoginBox() {
  const { User_isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
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
    dispatch(login(formData));
    // navigate("/");
  };
  // console.log(process.env.REACT_APP_API)
  useEffect(() => {

    // For Success
    if (isSuccess) {
      navigate("/");
    }

    dispatch({ type: user_login_reset });
  }, [ isSuccess]);
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
            <form action="" onSubmit={handleSubmit}>
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
                <FormControl isInvalid={formError.password}>
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
