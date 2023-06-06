import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./TableData.module.css";
import TableList from "./TableList";
import { get_project } from "../../redux/project/Project.action";
import { useDispatch, useSelector } from "react-redux";
import { project_reset } from "../../redux/project/Project.actionTypes";

export default function TableData() {
  const { project_data, isSuccess } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_project());
    if (isSuccess) {
      dispatch({ type: project_reset });
    }
  }, [isSuccess]);
  return (
    <Box
      overflowX={"scroll"}
      w="100%"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
          width: "0px",
        },
      }}
    >
      <table className={style.container}>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Reason</th>
            <th>Type</th>
            <th>Divison</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Dept.</th>
            <th>Location</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {project_data?.map((ele) => {
            return <TableList {...ele} key={ele._id} />;
          })}
        </tbody>
      </table>
    </Box>
  );
}
