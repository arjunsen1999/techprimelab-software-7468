import { Box } from '@chakra-ui/react'
import React from 'react'
import style from "./TableData.module.css"
import TableList from './TableList'

export default function TableData() {
  return (
  <Box overflowX={"scroll"} w="100%"  css={{
    "&::-webkit-scrollbar": {
        display:"none",
      width: "0px",
    },
  }}>
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
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
        </tbody>
    </table>
  </Box>
  )
}
