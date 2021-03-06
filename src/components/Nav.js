import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <a href="#" id="logo">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  background: #282828;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;

  a {
    text-decoration: none;
    color: #fff;
  }

  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      padding: 0 3rem;
      position: relative;
    }
  }
`;

export default Nav;
