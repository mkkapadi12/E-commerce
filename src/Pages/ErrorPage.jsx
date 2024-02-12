import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div>
            <h2>404</h2>
            <h2>UH OH ! You're lost.</h2>
            <p>
              The page you are looking for does not exist. How you got here is a
              Mystery. You can click the button below to go back to the
              homepage.
            </p>
            <NavLink to="/">
              <Button>Home</Button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0rem;
    text-align: center;

    h2 {
      font-size: 8rem;
    }
    p {
      padding: 0rem 2rem;
      margin: 4rem 0rem;
    }
  }
`;
export default ErrorPage;
