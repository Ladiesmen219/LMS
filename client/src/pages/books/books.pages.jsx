import { useState } from "react";
import { Grid, Toolbar } from "@mui/material";
import styled from "styled-components";
import BookCard from "../../components/bookCard/bookCard.component";
import BookSearch from "../../components/common/searchbar/bookSearch.component";
import PaginationComponent from "../../components/common/pagination/pagination.component";
import BackToTop from "../../components/common/backToTop/backToTop.component";

export default function BookPage() {
  const [page, setPage] = useState(1);

  const handlePagination = (e) => {
    setPage(+e.target.innerText);
  };

  return (
    <BookPageContainer>
      <Toolbar id="back-to-top-anchor" />

      <BookSearch />

      <BookDisplayContainer id="back-to-top-anchor">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {[...Array(24)].map((item, idx) => (
            <Grid key={idx} item xs={12} sm={4} md={3}>
              <BookCard bookId={idx} />
            </Grid>
          ))}
        </Grid>
      </BookDisplayContainer>
      <BackToTop />

      <PaginationComponent total={20} page={page} handlePagination={handlePagination} />
    </BookPageContainer>
  );
}

const BookPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookDisplayContainer = styled.div`
  margin: 20px 60px;
`;
