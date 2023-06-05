import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import SortDrawer from "./SortDrawer";
import TableData from "./TableData";

export default function ProjectListingBox() {
  return (
    <>
      <Box
        bg={{ base: "transparent", md: "white" }}
        w="100%"
        minH={"20vh"}
        boxShadow={"#F3F5F7 0px 13px 8px -5px, #F3F5F7 0px 8px 8px -8px"}
        borderRadius={"12px"}
        p={{base : "0px", md: "20px"}}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb="20px"
        >
          <Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch color="gray" fontSize={"18px"} />
              </InputLeftElement>
              <Input
                type="text"
                focusBorderColor={"none"}
                borderRadius={"0px"}
                placeholder="Search"
                _active={{ border: "none" }}
                border={"none"}
                borderBottom={"1px solid black"}
              />
            </InputGroup>
          </Box>

          <Box display={{base: "none", md : "flex"}} alignItems={"center"} justifyContent={"center"}>
            <Text color={"gray"} fontSize={"18px"}>
              Sort By :{" "}
            </Text>
            <Select
              w="100px"
              focusBorderColor={"none"}
              border={"none"}
              placeholder="Filter"
              fontSize={"18px"}
            >
              <option value="">Pjhas</option>
              <option value="">jdsd</option>
            </Select>
          </Box>
          <Box display={{base: "block", md : "none"}}><SortDrawer /></Box>
        </Box>
        {/* <>Main</> */}
        <Box
          display={{ base: "none", md: "block" }}
        >
          <TableData />
        </Box>
        <Box  display={{ base: "block", md: "none" }}>
          <Box display={"grid"} gridTemplateColumns={{base : "1fr", sm : "1fr 1fr"}} gap={"10px"}>
            <Card />
            <Card />
            <Card />
          </Box>
        </Box>
        {/* <>Main</> */}
      </Box>
    </>
  );
}
