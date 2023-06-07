import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";

export default function LoadingPage() {
  return (
    <>
      <Box w="100%">
        <Skeleton startColor="#EBF5FF" endColor="#cfe5f9" w="100%" h="40px" mb="10px" />
        <Skeleton w="100%" h="60px" mb="5px" />
        <Skeleton w="100%" h="60px" mb="5px" />
        <Skeleton w="100%" h="60px" mb="5px" />
        <Skeleton w="100%" h="60px" mb="5px" />
        <Skeleton w="100%" h="60px" mb="5px" />
      </Box>
    </>
  );
}
