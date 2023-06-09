import React from "react";
import style from "./TableData.module.css";
import { Button } from "@chakra-ui/react";
import { update_status } from "../../redux/project/Project.action";
import { useDispatch } from "react-redux";

export default function TableList({
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
  // Start_date
  const convert_start_date = new Date(start_date);
  const start_year = convert_start_date.getFullYear();
  const start_month = String(convert_start_date.getMonth() + 1).padStart(
    2,
    "0"
  );
  const start_day = String(convert_start_date.getDate()).padStart(2, "0");
  const start_date_format = `${start_year}-${start_month}-${start_day}`;
  // Start_date
  // End_date
  const convert_end_date = new Date(end_date);
  const end_year = convert_end_date.getFullYear();
  const end_month = String(convert_end_date.getMonth() + 1).padStart(
    2,
    "0"
  );
  const end_day = String(convert_end_date.getDate()).padStart(2, "0");
  const end_date_format = `${end_year}-${end_month}-${end_day}`;
   // End_date
  return (
    <>
      <tr className={style.tbodyTr}>
        <td>
          <p>{project_name}</p>
          <p>
            {start_date_format} to {end_date_format}
          </p>
        </td>
        <td>{reason}</td>
        <td>{type}</td>
        <td>{division}</td>
        <td>{category}</td>
        <td>{priority}</td>
        <td>{dept}</td>
        <td>{location}</td>
        <td className={style.bold}>{status}</td>
        <td>
          <Button
            bg="#025AAB"
            color={"white"}
            variant="solid"
            borderRadius={"20px"}
            h="28px"
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
            h="28px"
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
            h="28px"
            onClick={() => handleUpdate("Cancelled", _id)}
          >
            Cancel
          </Button>
        </td>
      </tr>
    </>
  );
}
