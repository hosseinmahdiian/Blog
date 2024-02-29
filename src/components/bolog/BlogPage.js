import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_QUERY_BLOG_INFO } from "../../graphQL/Queries";
import Loader from "../loader/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../commment/commentForm";
const BlogPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_QUERY_BLOG_INFO, {
    variables: { slug },
  });

  const navigate = useNavigate();
  if (loading) return <Loader />;

  if (error) return <h3>error</h3>;

  const { post } = data;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {post.title}
          </Typography>
          <ArrowBackIosRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={10} margin="auto" mt={5}>
          <img
            src={post.coverPhoto.url}
            alt={post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" flexDirection="row">
          <Avatar src={post.author.avatar.url} sx={{ width: 80, height: 80 }} />
          <Grid mt={1} sx={{ marginRight: 1 }}>
            <Typography component="p" variant="h5" fontWeight={700}>
              {post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {post.author.field}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.content.html),
            }}
          ></div>
        </Grid>
        <CommentForm slug={post.slug}/>
      </Grid>
    </Container>
  );
};

export default BlogPage;
