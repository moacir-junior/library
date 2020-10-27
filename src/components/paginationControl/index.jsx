import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default function TablePaginationDemo({ count, page, setPage, pagesize, setPagesize }) {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPagesize(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      labelRowsPerPage="Linhas"
      component="div"
      count={count}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={pagesize}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
}