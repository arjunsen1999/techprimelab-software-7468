import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";

export default function StatusLoading() {
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
        gap={"30px"}
        minH="110px"
        mb="20px"
      >
        <Skeleton height='100px' />
        <Skeleton height='100px' />
        <Skeleton height='100px' />
        <Skeleton height='100px' />
        <Skeleton height='100px' />
      </Box>
    </>
  );
}
