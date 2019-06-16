import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const LISTING_QUERY = graphql`
  query ListingBlogPost {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 100, 100, 0.1);
  padding: 1rem;
  border-radius: 3px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 5px;
  }
  p {
    font-size: 0.9rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;
const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>

          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>
            Read More
          </Link>
        </Post>
      ))
    }
  />
);

export default Listing;
