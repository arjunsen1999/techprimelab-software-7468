import { Box, Button, Input, Select, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { create_project } from "../../redux/project/Project.action";
import notification from "../../Toast";

export default function FormBox() {
  const dispatch = useDispatch();
  const { project_isLoading, page } = useSelector((state) => state.project);



  const [formData, setFormData] = useState({
    project_name: "",
    reason: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    dept: "",
    location: "",
    start_date: "",
    end_date: "",
  });

    /////////////////////////////////

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    let [selectedEndDate, setSelectedEndDate] = useState("");
  
    const handleStartDateChange = (event) => {
      setStartDate(event.target.value);
      setFormData((prev) =>{
         return {
          ...prev,
          start_date : event.target.value
         }
      });
    };
  
    const handleEndDateChange = (event) => {
      selectedEndDate = event.target.value;
      if (selectedEndDate > startDate) {
        setEndDate(selectedEndDate);
        setFormData((prev) =>{
          return {
           ...prev,
           end_date : selectedEndDate
          }
       });
      } else {
        // Handle invalid end date
        // alert("End date should be greater than start date");
        notification("error", "End date should be greater than start date");
      }
    };
    //////////////////////////////////
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
    dispatch(create_project(formData));
  };
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
        <form action="" onSubmit={handleSubmit}>
          <Box
            display={"grid"}
            gridTemplateColumns={{ md: "2fr 1fr 0.5fr" }}
            mb={{ base: "25px", md: "40px" }}
          >
            <Textarea
              placeholder="Enter Project Theme"
              name="project_name"
              onChange={handleChange}
              isRequired
            ></Textarea>
            <Box></Box>
            {project_isLoading ? (
              <Button
                isLoading
                bg="#035FB2"
                w="150px"
                color={"white"}
                borderRadius={"23px"}
                cursor={"pointer"}
                display={{ base: "none", md: "block" }}
              ></Button>
            ) : (
              <Input
                type="submit"
                bg="#035FB2"
                w="150px"
                value={"Save Project"}
                color={"white"}
                borderRadius={"23px"}
                cursor={"pointer"}
                display={{ base: "none", md: "block" }}
              />
            )}
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns={{ sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr 0.5fr" }}
            gap={"30px"}
            mb={{ base: "10px", md: "25px" }}
          >
            <Box>
              <FormControl isRequired>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Reason
                </FormLabel>
                <Select
                  placeholder="Reason"
                  fontWeight={"500"}
                  color={"#454545"}
                  name="reason"
                  onChange={handleChange}
                >
                  <option>Business</option>
                  <option>Dealership</option>
                  <option>Transport</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Type
                </FormLabel>
                <Select
                  placeholder="Type"
                  fontWeight={"500"}
                  color={"#454545"}
                  name="type"
                  onChange={handleChange}
                >
                  <option>Internal</option>
                  <option>External</option>
                  <option>Vendor</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Division
                </FormLabel>
                <Select
                  placeholder="Division"
                  fontWeight={"500"}
                  color={"#454545"}
                  name="division"
                  onChange={handleChange}
                >
                  <option>Compressor</option>
                  <option>Filters</option>
                  <option>Pumps</option>
                  <option>Glass</option>
                  <option>Water Heater</option>
                </Select>
              </FormControl>
            </Box>
            <Box display={{ sm: "none", md: "block" }}></Box>
          </Box>
          {/* /////////////////</form> */}
          <Box
            display={"grid"}
            gridTemplateColumns={{ sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr 0.5fr" }}
            gap={"30px"}
            mb={{ base: "10px", md: "25px" }}
          >
            <Box>
              <FormControl isRequired>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Category
                </FormLabel>
                <Select
                  placeholder="Category"
                  fontWeight={"500"}
                  color={"#454545"}
                  name="category"
                  onChange={handleChange}
                >
                  <option>Quality A</option>
                  <option>Quality B</option>
                  <option>Quality C</option>
                  <option>Quality D</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Priority
                </FormLabel>
                <Select
                  placeholder="Priority"
                  fontWeight={"500"}
                  color={"#454545"}
                  name="priority"
                  onChange={handleChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Department
                </FormLabel>
                <Select
                  placeholder="Department"
                  fontWeight={"500"}
                  color={"#454545"}
                  name="dept"
                  onChange={handleChange}
                >
                  <option>Startegy</option>
                  <option>Finance</option>
                  <option>Quality</option>
                  <option>Maintenance</option>
                  <option>Stores</option>
                  <option>HR</option>
                </Select>
              </FormControl>
            </Box>
            <Box display={{ sm: "none", md: "block" }}></Box>
          </Box>
          {/* //////////////////</form> */}
          <Box
            display={"grid"}
            gridTemplateColumns={{ sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr 0.5fr" }}
            gap={"30px"}
            mb={{ base: "10px", md: "25px" }}
          >
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  Start Date as per Project Plan
                </FormLabel>
                {/* <Input
                  type="date"
                  placeholder="D Month, Yr"
                  fontWeight={"500"}
                  color={"#454545"}
                  name="start_date"
                  onChange={handleChange}
                /> */}
                <Input
                  placeholder="D Month, Yr"
                  type="date"
                  fontWeight={"500"}
                  color={"#454545"}
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontSize={"15px"} color={"#9C9C9C"}>
                  End Date as per Project Plan
                </FormLabel>
                {/* <Input
                  type="date"
                  placeholder="D Month, Yr"
                  fontWeight={"500"}
                  color={"#454545"}
                  name="end_date"
                  onChange={handleChange}
                /> */}
                <Input
                  placeholder="D Month, Yr"
                  fontWeight={"500"}
                  color={"#454545"}
                  type="date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  // disabled={() => selectedEndDate < startDate}
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
                  name="location"
                  onChange={handleChange}
                >
                  <option>Pune</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </Select>
              </FormControl>
            </Box>
            <Box display={{ sm: "none", md: "block" }}></Box>
          </Box>
          {/* /////////////////</form> */}
          <Box
            display={"grid"}
            gridTemplateColumns={{ sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr 0.5fr" }}
            gap={"30px"}
            mb={{ base: "10px", md: "25px" }}
          >
            <Box display={{ base: "none", md: "block" }}></Box>
            <Box display={{ base: "none", md: "block" }}></Box>
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
            <Box display={{ sm: "none", md: "block" }}></Box>
          </Box>
          <Box>
            {project_isLoading ? (
              <Button
                isLoading
                loadingText="Save Project"
                bg="#035FB2"
                w="100%"
                color={"white"}
                borderRadius={"23px"}
                cursor={"pointer"}
                display={{ base: "block", md: "none" }}
              >
                Save Project
              </Button>
            ) : (
              <Input
                type="submit"
                bg="#035FB2"
                w="100%"
                value={"Save Project"}
                color={"white"}
                borderRadius={"23px"}
                cursor={"pointer"}
                display={{ base: "block", md: "none" }}
              />
            )}
          </Box>
        </form>
      </Box>
    </>
  );
}
