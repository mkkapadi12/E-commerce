import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ stars, reviews }) => {
  // console.log(stars);
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    let num = index + 0.5;
    return (
      <span>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= num ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon empty-icon" />
        )}
      </span>
    );
  });

  return (
    <>
      <Wrapper>
        <div className="icon-style">
          {ratingStar}
          {/* <FaStarHalfAlt /> */}
          {/* <AiOutlineStar /> */}
          <p>({reviews} customer reviews)</p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    font-size: 2rem;
    color: orange;
  }

  .empty-icon {
    font-size: 2.4rem;
  }
  p {
    margin: 0;
    padding-left: 1.2rem;
  }
`;

export default Rating;
