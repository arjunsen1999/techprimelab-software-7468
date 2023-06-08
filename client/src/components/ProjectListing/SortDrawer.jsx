import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { handleChangeFilter } from "../../redux/project/Project.action";
import {RxHamburgerMenu} from "react-icons/rx"

export default function SortDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const btnRef = React.useRef();
  const handleClick = (value) =>{
    dispatch(handleChangeFilter(value));
    onClose();
  }
  return (
    <>
      <Button ref={btnRef} bg="transparent" onClick={onOpen}>
        <RxHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton /> */}
          <DrawerHeader>Sort By</DrawerHeader>

          <DrawerBody>
            <Box
              mb={"10px"}
              _active={{
                bg: "#ebf5ff",
              }}
              p={"10px 4px"}
              onClick={() => handleClick("reason")}
              
            >
              <Text fontSize={"18px"}>Reason</Text>
            </Box>
            <Box
              mb={"10px"}
              _active={{
                bg: "#ebf5ff",
              }}
              p={"10px 4px"}
              onClick={() => handleClick("category")}
            >
              <Text fontSize={"18px"}>Category</Text>
            </Box>
            <Box
              mb={"10px"}
              _active={{
                bg: "#ebf5ff",
              }}
              p={"10px 4px"}
              onClick={() => handleClick("status")}
            >
              <Text fontSize={"18px"}>Status</Text>
            </Box>
            <Box
              mb={"10px"}
              _active={{
                bg: "#ebf5ff",
              }}
              p={"10px 4px"}
              onClick={() => handleClick("location")}
            >
              <Text fontSize={"18px"}>Location</Text>
            </Box>
            <Box
              mb={"10px"}
              _active={{
                bg: "#ebf5ff",
              }}
              p={"10px 4px"}
              onClick={() => handleClick("project_name")}
            >
              <Text fontSize={"18px"}>Project Name</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
