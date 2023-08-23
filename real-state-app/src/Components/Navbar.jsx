import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  const allLinks = [
    { path: "/", name: "Home" },
    { path: "/property", name: "Property" },
    { path: "/about", name: "About" },
  ];
  return (
    <Wrapper>
      <LogoContainer>
        <h1>PropertyWala</h1>
      </LogoContainer>
      <Navlinks>
        {allLinks.map((link, index) => (
          <Link to={link.path} key={index}>
            {link.name}
          </Link>
        ))}
      </Navlinks>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 95%;
  height: 65px;
  margin: auto;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const LogoContainer = styled.div`
  width: 15%;
  height: 100%;
  border: 1px solid red;
  text-align: left;
  cursor: pointer;
`;

const Navlinks = styled.div`
  width: 80%;
  height: 100%;
  border: 1px solid red;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Navbar;
