import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const NavBarWrapper = styled.div`
    width: 100%;
    height: 8rem;
    position: fixed;
    top:0;
    left:0;
    background: var(--color-white);
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 3rem;
    z-index:100
`;

const Navbar = () => (
  <NavBarWrapper>
    <Logo />
    <Menu />
  </NavBarWrapper>
);

export default Navbar;
