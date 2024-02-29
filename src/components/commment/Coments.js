import { useQuery } from "@apollo/client";
import React from "react";
import { GET_QUERTY_COMMENTS } from "../../graphQL/Queries";
import Loader from "../loader/Loader";
import { Avatar, Box, Grid, Typography } from "@mui/material";

const Comments = ({ slug }) => {
  const { data, error, loading } = useQuery(GET_QUERTY_COMMENTS, {
    variables: { slug },
  });

  if (error) return <h4>error</h4>;

  if (loading) return <Loader />;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} mt={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            key={comment.id}
            item
            xs={12}
            m={2}
            p={2}
            border="1px solid silver"
            borderRadius={1}
          >
            <Box component="div" display="flex" flexDirection="row" alignItems="center">
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p" mt={2}>
                {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;
