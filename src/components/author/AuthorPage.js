import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_QUERY_AUTHOR_INFO } from "../../graphQL/Queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";
import Loader from "../loader/Loader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_QUERY_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader/>

  if (error) return <h3>error</h3>;

  const { author } = data;

  // console.log(author);

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.descr.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="p" variant="h5" fontWeight={700}>
            مقالات {author.name}
          </Typography>
          <Grid container spacing={2}>
            {author.post.map((post) => (
              <Grid item xs={12} sm={6} md={4} mt={2} key={post.id}>
                <CardEL {...post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
