import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import "./Pagination.css";
import { handlePage } from "../../redux/project/Project.action";

export default function Pagination() {
  const { total_page } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    dispatch(handlePage(currentPage + 1));
  }, [currentPage]);
  return (
    <Box
      // border="1px solid red"
      mb="30px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={total_page} // Total number of pages
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={(data) => setCurrentPage(data.selected)}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"previous"}
        nextClassName={"next"}
        previousLinkClassName={"previous-link"}
        nextLinkClassName={"next-link"}
        disabledClassName={"disabled"}
      />
    </Box>
  );
}
