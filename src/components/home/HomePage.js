import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../bolog/Blogs";

const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} p={3}>
          <Grid item xs={12} md={3} mt={4}>
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
              نویسنده
            </Typography>
            <Authors />
          </Grid>
          <Grid item xs={12} md={9} mt={4}>
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
              مقاله
            </Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
