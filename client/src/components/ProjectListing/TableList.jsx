import React from "react";
import style from "./TableData.module.css";
import { Button } from "@chakra-ui/react";

export default function TableList() {
  return (
    <>
      <tr className={style.tbodyTr}>
        <td>
            <p>Lorem, ipsumt</p>
            <p>Lorem ipsum dolor sit amet. ksj ssss</p>
        </td>
        <td>Bussiness</td>
        <td>Bussiness</td>
        <td>Bussiness</td>
        <td>Bussiness</td>
        <td>Bussiness</td>
        <td>Bussiness</td>
        <td>Bussiness</td>
        <td>Bussiness</td>
        <td>
          <Button
            bg="#025AAB"
            color={"white"}
            variant="solid"
            borderRadius={"20px"}
            h="28px"
          >
            Start
          </Button>
          <Button
            colorScheme="teal"
            border={"1px solid #1277D3"}
            color={"#1277D3"}
            variant="outline"
            borderRadius={"20px"}
            h="28px"
          >
            Close
          </Button>
          <Button
            colorScheme="teal"
            border={"1px solid #1277D3"}
            color={"#1277D3"}
            variant="outline"
            borderRadius={"20px"}
            h="28px"
          >
            Cancel
          </Button>
        </td>
      </tr>
    </>
  );
}
