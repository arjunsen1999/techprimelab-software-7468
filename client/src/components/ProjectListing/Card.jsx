import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function Card() {
  return (
    <>
      <Box bg={"white"} minH={"100px"} borderRadius={"12px"} p="20px">
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"20px"}
        >
          <Box maxW={"60%"}>
            <Text fontWeight={"500"}>Running Running Running </Text>
          </Box>
          <Box>
            <Text fontWeight={"500"}>Running</Text>
          </Box>
        </Box>
        <Box mb="20px">
          <Text fontSize={"15px"} color={"gray"}>
            jun jshj shjhsj
          </Text>
        </Box>
        <Box mb="20px">
          <Text fontSize={{base : "12px", sm : "14px"}} color={"gray"} mb="0px">
            Reason:{" "}
            <span style={{ fontWeight: "500", fontSize: "14px" }}>
              Bussiness
            </span>
          </Text>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"20px"}
            m={"0px"}
          >
            <Text fontSize={{base : "12px", sm : "14px"}} color={"gray"}>
              Reason:{" "}
              <span style={{ fontWeight: "500", fontSize: "14px" }}>
                Bussiness
              </span>
            </Text>
            <UnorderedList>
              <ListItem>
                <Text fontSize={"15px"} color={"gray"}>
                  Reason:{" "}
                  <span style={{ fontWeight: "500", fontSize: "14px" }}>
                    Bussiness
                  </span>
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"20px"}
            m={"0px"}
          >
            <Text fontSize={{base : "12px", sm : "14px"}} color={"gray"}>
              Reason:{" "}
              <span style={{ fontWeight: "500", fontSize: "14px" }}>
                Bussiness
              </span>
            </Text>
            <UnorderedList>
              <ListItem>
                <Text fontSize={{base : "12px", sm : "14px"}} color={"gray"}>
                  Reason:{" "}
                  <span style={{ fontWeight: "500", fontSize: "14px" }}>
                    Bussiness
                  </span>
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
          <Text fontSize={{base : "12px", sm : "14px"}} color={"gray"}>
            Reason:{" "}
            <span style={{ fontWeight: "500", fontSize: "14px" }}>
              Bussiness
            </span>
          </Text>
          <Text fontSize={{base : "12px", sm : "14px"}} color={"gray"}>
            Reason:{" "}
            <span style={{ fontWeight: "500", fontSize: "14px" }}>
              Bussiness
            </span>
          </Text>
        </Box>
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap={"10px"}>
          <Button
            bg="#025AAB"
            color={"white"}
            variant="solid"
            borderRadius={"20px"}
          >
            Start
          </Button>
          <Button
            colorScheme="teal"
            border={"1px solid #1277D3"}
            color={"#1277D3"}
            variant="outline"
            borderRadius={"20px"}
          >
            Close
          </Button>
          <Button
            colorScheme="teal"
            border={"1px solid #1277D3"}
            color={"#1277D3"}
            variant="outline"
            borderRadius={"20px"}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
}
