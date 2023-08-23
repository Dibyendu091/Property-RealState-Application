import React from "react";
import styled from "styled-components";
import HomePageSlider from "../Components/HomePageSlider";

const Home = () => {
  return (
    <Wrapper>
      <div>
        <HomePageSlider />
      </div>
      <div>
        <h1>Our Property</h1>
        
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 95%;
  height: auto;
  margin: 30px auto;
  border: 1px solid red;
`;
export default Home;
