import React from "react";
import styled from "styled-components";

const PropertyCard = ({ image, title, body, price, ratings }) => {
  return (
    <>
      <Wrapper>
        <ImageContainer>
          <img src={image} alt="" />
        </ImageContainer>
        <Body>
          <h2>{title}</h2>
          <p>{body}</p>
          <h4>{price}</h4>
          <p>{ratings}</p>
        </Body>
        <Buttons>
          <button>Book Now</button>
          <button>Contact Dealer</button>
        </Buttons>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 320px;
  height: 550px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: auto;
  }
`;

const Body = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 30px;
  h2 {
    margin-top: 70px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  button {
    width: 140px;
    height: 30px;
    border-radius: 5px;
    background-color: #971e06;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
export default PropertyCard;
