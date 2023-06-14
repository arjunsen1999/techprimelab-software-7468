import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import card from "./Card.module.css";

export default function Card({ number, title }) {
  return (
    <>
      <Box
        bg="white"
        w="220px"
        minH="100px"
        marginRight={"40px"}
        display={"inline-block"}
        borderRadius={"4px"}
        p="10px 20px"
        boxShadow={"#F3F5F7 0px 13px 8px -5px, #F3F5F7 0px 8px 8px -8px"}
        className={card.container}
      >
        <Text color={"gray"} fontSize={"18px"}>
          {title}
        </Text>
        <Heading as="h1" fontSize={"50px"} color={"#474D52"}>
          {number}
        </Heading>
      </Box>
    </>
  );
}
