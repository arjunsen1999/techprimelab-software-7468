import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { update_status } from "../../redux/project/Project.action";
import { useDispatch } from "react-redux";

export default function Card({
  project_name,
  reason,
  type,
  division,
  category,
  dept,
  location,
  status,
  priority,
  start_date,
  end_date,
  _id,
}) {
  const dispatch = useDispatch();
  const handleUpdate = (status, id) => {
    dispatch(update_status(status, id));
  };
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
            <Text fontWeight={"500"}>{project_name}</Text>
          </Box>
          <Box>
            <Text fontWeight={"500"}>{status}</Text>
          </Box>
        </Box>
        <Box mb="20px">
          <Text fontSize={"15px"} color={"gray"}>
            {start_date} to {end_date}
          </Text>
        </Box>
        <Box mb="20px">
          <Text fontSize={{ base: "12px", sm: "14px" }} color={"gray"} mb="0px">
            Reason:{" "}
            <span style={{ fontWeight: "500", fontSize: "14px" }}>
              {reason}
            </span>
          </Text>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"20px"}
            m={"0px"}
          >
            <Text fontSize={{ base: "12px", sm: "14px" }} color={"gray"}>
              Type:{" "}
              <span style={{ fontWeight: "500", fontSize: "14px" }}>
                {type}
              </span>
            </Text>
            <UnorderedList>
              <ListItem>
                <Text fontSize={"15px"} color={"gray"}>
                  Category:{" "}
                  <span style={{ fontWeight: "500", fontSize: "14px" }}>
                    {category}
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
            <Text fontSize={{ base: "12px", sm: "14px" }} color={"gray"}>
              Div:{" "}
              <span style={{ fontWeight: "500", fontSize: "14px" }}>
                {division}
              </span>
            </Text>
            <UnorderedList>
              <ListItem>
                <Text fontSize={{ base: "12px", sm: "14px" }} color={"gray"}>
                  Dept:{" "}
                  <span style={{ fontWeight: "500", fontSize: "14px" }}>
                    {dept}
                  </span>
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
          <Text fontSize={{ base: "12px", sm: "14px" }} color={"gray"}>
            Location:{" "}
            <span style={{ fontWeight: "500", fontSize: "14px" }}>
              {location}
            </span>
          </Text>
          <Text fontSize={{ base: "12px", sm: "14px" }} color={"gray"}>
            Priority:{" "}
            <span style={{ fontWeight: "500", fontSize: "14px" }}>
              {priority}
            </span>
          </Text>
        </Box>
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap={"10px"}>
          <Button
            bg="#025AAB"
            color={"white"}
            variant="solid"
            borderRadius={"20px"}
            onClick={() => handleUpdate("Running", _id)}
          >
            Start
          </Button>
          <Button
            colorScheme="teal"
            border={"1px solid #1277D3"}
            color={"#1277D3"}
            variant="outline"
            borderRadius={"20px"}
            onClick={() => handleUpdate("Closed", _id)}
          >
            Close
          </Button>
          <Button
            colorScheme="teal"
            border={"1px solid #1277D3"}
            color={"#1277D3"}
            variant="outline"
            borderRadius={"20px"}
            onClick={() => handleUpdate("Cancelled", _id)}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
}
