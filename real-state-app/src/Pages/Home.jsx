import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomePageSlider from "../Components/HomePageSlider";
import PropertyCard from "../Components/PropertyCard";

const Home = () => {
  const [property, setProperty] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:5000/property")
      .then((res) => {
        setProperty(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper>
      <div>
        <HomePageSlider />
      </div>
      <h1>Our Property</h1>
      <PropertyContainer>
        {property.map((item) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/property/${item.id}/${
                item.title ? item.title.split(" ").join("-") : ""
              }`}
            >
              <PropertyCard item={item} key={item.id} {...item} />
            </Link>
          );
        })}
      </PropertyContainer>
      <h4 style={{ textAlign: "right", paddingTop: "30px" }}>
        See More &gt;&gt;
      </h4>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 95%;
  height: auto;
  margin: 30px auto;
  border: 1px solid red;
`;

const PropertyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 30px;
`;
export default Home;
