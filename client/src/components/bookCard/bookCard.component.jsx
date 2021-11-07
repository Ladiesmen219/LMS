import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CommentIcon from "@mui/icons-material/Comment";

function BookCard({ bookId, stock = 10, commentCount = 5 }) {
  const text = `War and Peace is a literary work mixed with chapters on history and philosophy by the Russian author Leo
Tolstoy, first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's
finest literary achievements and remains an internationally praised classic of world literature.`;
  return (
    <CardContainer>
      <CardMedia component="img" alt="books" height="140" image="/assets/book_placeholder.jpg" />
      <CardContent>
        <Typography variant="h5" component="div">
          War and Peace
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          Leo Tolstoy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text.slice(0, 150)} <BookLink to={`/books/${bookId}`}>...read more</BookLink>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" size="small">
          Stock({stock})
        </Button>
        <Button variant="text" size="small" color="success">
          Borrow
        </Button>
        <Button variant="text" size="small" color="secondary">
          <CommentIcon />({commentCount})
        </Button>
      </CardActions>
    </CardContainer>
  );
}

export default BookCard;

const BookLink = styled(Link)`
  text-decoration: none;
  color: mediumseagreen;
`;

const CardContainer = styled(Card)`
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    box-shadow: unset;
  }
`;
