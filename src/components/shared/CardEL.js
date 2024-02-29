import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardEL = (props) => {
  //   console.log(props);
  const { title, slug, coverPhoto, author } = props;
  //   console.log({ title, slug, coverPhoto, author });
  return (
    <Card sx={{ boxShadow: "rbga(0,0,0,0.1 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginRight: 0 }} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="text.secondery"
              sx={{ marginRight: 1 }}
            >
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="190"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link to={`/blogs/${slug}`}>
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3, marginBottom: 1 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEL;
