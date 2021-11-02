import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

import LinkButton from "../../components/common/linkButton/linkButton.component";

import LandingButtonData from "./landingButtonData";

function LandingPage() {
  return (
    <LandingPageContainer>
      <Typography textAlign="center" sx={{ mb: 3 }} variant="h2">
        Welcome to Library Management System
      </Typography>
      <Container maxWidth="xs">
        <Grid direction="column" container spacing={3}>
          {LandingButtonData.map((data, idx) => (
            <LinkButton key={idx} path={data.path} text={data.text} />
          ))}
        </Grid>
      </Container>
    </LandingPageContainer>
  );
}

export default LandingPage;

const LandingPageContainer = styled.div`
  margin-top: 20px;
`;
