import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import logo from "../images/logo.png";

const HeaderWrapper = styled.div`
  background: #d9534f;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
  }
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 200px;
  padding: 0.5rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: "100px",
            }}
            src={logo}
            alt="logo"
          />
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
