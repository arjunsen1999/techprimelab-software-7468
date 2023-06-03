import { Box, Input, Select, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function FormBox() {
  return (
    <>
      <Box
        bg="white"
        w="100%"
        minH={"100vh"}
        boxShadow={"#F3F5F7 0px 13px 8px -5px, #F3F5F7 0px 8px 8px -8px"}
        borderRadius={"12px"}
        p={"20px"}
      >
        <form action="">
          <Box
            display={"grid"}
            gridTemplateColumns={{ md: "2fr 1fr 0.5fr" }}
            mb={{base:"25px", md : "40px"}}
          >
            <Textarea placeholder="Enter Project Theme"></Textarea>
            <Box></Box>
            <Input
              type="submit"
              bg="#035FB2"
              w="150px"
              value={"Save Project"}
              color={"white"}
              borderRadius={"23px"}
              cursor={"pointer"}
              display={{base:"none", md : "block"}}
            />
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns={{sm : "1fr 1fr 1fr", md:"1fr 1fr 1fr 0.5fr"}}
            gap={"30px"}
            mb={{base : "10px", md : "25px"}}
          >
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Reason
                </FormLabel>
                <Select
                  placeholder="Reason"
                  fontWeight={"500"}
                  color={"#454545"}
                >
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Type
                </FormLabel>
                <Select placeholder="Type" fontWeight={"500"} color={"#454545"}>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Division
                </FormLabel>
                <Select
                  placeholder="Division"
                  fontWeight={"500"}
                  color={"#454545"}
                >
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Box>
            <Box display={{sm:"none",md:"block"}}></Box>
          </Box>
          {/* /////////////////</form> */}
          <Box
            display={"grid"}
            gridTemplateColumns={{sm : "1fr 1fr 1fr", md:"1fr 1fr 1fr 0.5fr"}}
            gap={"30px"}
            mb={{base : "10px", md : "25px"}}
          >
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Category
                </FormLabel>
                <Select
                  placeholder="Category"
                  fontWeight={"500"}
                  color={"#454545"}
                >
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Priority
                </FormLabel>
                <Select
                  placeholder="Priority"
                  fontWeight={"500"}
                  color={"#454545"}
                >
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Department
                </FormLabel>
                <Select
                  placeholder="Department"
                  fontWeight={"500"}
                  color={"#454545"}
                >
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Box>
            <Box display={{sm:"none",md:"block"}}></Box>
          </Box>
          {/* //////////////////</form> */}
          <Box
            display={"grid"}
            gridTemplateColumns={{sm : "1fr 1fr 1fr", md:"1fr 1fr 1fr 0.5fr"}}
            gap={"30px"}
            mb={{base : "10px", md : "25px"}}
          >
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Start Date as per Project Plan
                </FormLabel>
                <Input
                  type="date"
                  placeholder="D Month, Yr"
                  fontWeight={"500"}
                  color={"#454545"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  End Date as per Project Plan
                </FormLabel>
                <Input
                  type="date"
                  placeholder="D Month, Yr"
                  fontWeight={"500"}
                  color={"#454545"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Location
                </FormLabel>
                <Select
                  placeholder="Location"
                  fontWeight={"500"}
                  color={"#454545"}
                >
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Box>
            <Box display={{sm:"none",md:"block"}}></Box>
          </Box>
          {/* /////////////////</form> */}
          <Box
            display={"grid"}
            gridTemplateColumns={{sm : "1fr 1fr 1fr", md:"1fr 1fr 1fr 0.5fr"}}
            gap={"30px"}
            mb={{base : "10px", md : "25px"}}
          >
            <Box display={{base : "none", md : "block"}}></Box>
            <Box display={{base : "none", md : "block"}}></Box>
            <Text fontSize={"15px"} color={"#9C9C9C"}>
              Status:{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#454545",
                }}
              >
                Registered
              </span>
            </Text>
            <Box display={{sm:"none",md:"block"}}></Box>
          </Box>
          <Box>
          <Input
              type="submit"
              bg="#035FB2"
              w="100%"
              value={"Save Project"}
              color={"white"}
              borderRadius={"23px"}
              cursor={"pointer"}
              display={{base:"block", md : "none"}}
            />
          </Box>
        </form>
      </Box>
    </>
  );
}
