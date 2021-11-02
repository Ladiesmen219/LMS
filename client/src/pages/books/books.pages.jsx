import { Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import BookCard from "../../components/bookCard/bookCard.component";
import BookSearch from "../../components/common/searchbar/bookSearch.component";

export default function InputWithIcon() {
  return (
    <BookPageContainer>
      <BookSearch />

      <BookDisplayContainer>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <BookCard />
          </Grid>
        </Grid>
      </BookDisplayContainer>
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
