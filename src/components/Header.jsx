import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <Mainheader>
      <NavLink to="/">
        <img src="./images/logo2.0.png" alt="logo" className="logo" />
      </NavLink>
      <Nav />
    </Mainheader>
  );
};

const Mainheader = styled.header`
  padding: 0 4.8rem;
  height: 8vh;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    width: 17rem;
    height: 7rem;
  }
`;

export default Header;
