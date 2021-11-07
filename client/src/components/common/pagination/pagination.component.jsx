import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

function PaginationComponent({ total = 10, page, handlePagination }) {
  return (
    <Grid sx={{ margin: "30px 0" }} container alignItems="center" justifyContent="center">
      <Pagination
        onClick={handlePagination}
        page={page}
        shape="rounded"
        color="primary"
        siblingCount={1}
        count={total}
      />
    </Grid>
  );
}

export default PaginationComponent;
