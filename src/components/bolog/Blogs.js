import { useQuery } from "@apollo/client";
import React from "react";
import { GET_QUERY_BLOGS_INFO } from "../../graphQL/Queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../loader/Loader";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_QUERY_BLOGS_INFO);

  if (loading) return <Loader/>;

  if (error) return <h3>error</h3>;

  return <Grid container spacing={2}>
    {data.posts.map((post) => (
      <Grid item xs={12} sm={6} md={4} key={post.id} >
        <CardEL {...post}/>
      </Grid>
     
    ))}
  </Grid>;
};

export default Blogs;
