import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PropertyDetails = () => {
  const { id } = useParams();
  const [singleProperty, setSingleProperty] = useState([]); // Change here

  const getSingleProperty = () => {
    axios
      .get(`http://localhost:5000/property/${id}`)
      .then((res) => {
        setSingleProperty([res.data]);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getSingleProperty();
  }, []);

  return (
    <Wrapper>
      {singleProperty.map((item) => {
        return (
          <>
            <ImageBox key={item.id}>
              <img src={item.image} alt="" />
            </ImageBox>
            <Body>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <h4>Dealer Name :{item.dealer}</h4>
              <p>Public Rating :{item.ratings}</p>
              <p>Price :{item.price}</p>
              <p>Location :{item.location}</p>
              <p>
                Verified :
                {item.verified
                  ? "All Documents Verified"
                  : "Documents Not Verified"}
              </p>

              <Buttons>
                <button>Book Now</button>
                <button>Contact Dealer</button>
              </Buttons>
            </Body>
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 95%;
  height: auto;
  margin: 30px auto;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 60%;
  height: 500px;
  border: 4px solid red;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Body = styled.div`
  width: 35%;
`;

const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
 
  button {
    width: 140px;
    height: 30px;
    border-radius: 5px;
    background-color: #971e06;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin: 20px 20px;
  }
`;
export default PropertyDetails;
