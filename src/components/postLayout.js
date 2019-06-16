import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "./layout";

//Static Query
// can be used anywhere, but doesn't accept variables, can't use 'context'

// Page Query
// must be used on pages, can use variables for dynamic loading

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <h3>{markdownRemark.frontmatter.date}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    );
  }
}

// post query is gonna look for a slug that is a string, when that comes in
// you have access to it as $slug
// String! with the exclamation at the end means that it is required
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`;
