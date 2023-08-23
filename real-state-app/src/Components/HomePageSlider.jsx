import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HomePageSlider = () => {
  const imageSlide = [
    {
      url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Investing in real estate is investing in your future.",
      body: "Immediate action in real estate pays off. Invest now, let time enhance your value. Don't wait, accumulate.",
    },
    {
      url: "https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:
        "A house is made of bricks and beams. A home is made of hopes and dreams.",
      body: "Immediate action in real estate pays off. Invest now, let time enhance your value. Don't wait, accumulate.",
    },
    {
      url: "https://images.pexels.com/photos/3990589/pexels-photo-3990589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Owning a home is a keystone of wealth and stability.",
      body: "Immediate action in real estate pays off. Invest now, let time enhance your value. Don't wait, accumulate.",
    },
    {
      url: "https://images.pexels.com/photos/4258279/pexels-photo-4258279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Don't wait to buy real estate, buy real estate and wait.",
      body: "Immediate action in real estate pays off. Invest now, let time enhance your value. Don't wait, accumulate.",
    },
    {
      url: "https://images.pexels.com/photos/5071141/pexels-photo-5071141.jpeg",
      title:
        "A successful real estate investment starts with a vision and ends with execution.",
      body: "From vision to reality: Successful real estate investment demands strategic planning and decisive action.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageStyle = {
    backgroundImage: `url(${imageSlide[currentIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 4) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Container>
      <ImageBox style={imageStyle}></ImageBox>
      <TransparentBackground></TransparentBackground>
      <Description>
        <Content>
          <h1>{imageSlide[currentIndex].title}</h1>
          <p>{imageSlide[currentIndex].body}</p>
        </Content>
        <CarousalBoult>
          {imageSlide.map((imageSlide, currentIndex) => (
            <span
              key={currentIndex}
              onClick={() => setCurrentIndex(currentIndex)}
            ></span>
          ))}
        </CarousalBoult>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  height: 600px;
  max-width: 100%;
  position: relative;
`;

const ImageBox = styled.div``;

const Description = styled.div`
  position: absolute;
  width: 600px;
  z-index: 999;
  color: #971e06;
  top: 20%;
  left: 5%;
`;

const Content = styled.div`
  h1 {
    font-size: 46px;
  }
  p {
    font-size: 20px;
    margin-top: -25px;
    color: black;
  }
`;

const CarousalBoult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  span {
    width: 45px;
    height: 12px;
    background-color: #971e06;
    margin-left: 5%;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 3px 2px 2px rgba(73, 72, 72, 0.338);
  }
`;

const TransparentBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 998;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, rgba(255, 0, 0, 0), #fbabab);
`;

export default HomePageSlider;
