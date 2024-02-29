import { gql } from "@apollo/client";

const GET_QUERY_BLOGS_INFO = gql`
  query MyQuery {
    posts {
      title
      slug
      id
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

const GET_QUERY_BLOG_INFO = gql`
  query getQueryBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        name
        field
        slug
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
      slug
      title
      content {
        html
      }
    }
  }
`;

const GET_QUERY_AUTHORS_INFO = gql`
  query MyQuery {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_QUERY_AUTHOR_INFO = gql`
  query getQueryAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      name
      field
      avatar {
        url
      }
      descr {
        html
      }
      post {
        slug
        id
        title
        coverPhoto {
          url
        }
      }
    }
  }
`;

const GET_QUERTY_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
      email
    }
  }
`;

export {
  GET_QUERY_BLOGS_INFO,
  GET_QUERY_BLOG_INFO,
  GET_QUERY_AUTHORS_INFO,
  GET_QUERY_AUTHOR_INFO,
  GET_QUERTY_COMMENTS,
};
