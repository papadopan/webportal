import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    margin-bottom:3rem;
`;

const Img = styled.img`
    display: inline-block;
    vertical-align: middle;       
    width: 48px;
    height: 46px;   
`;
const Title = styled.span`
    margin-right:2rem
`;

const Menu = () => (
  <MenuWrapper>
    <Title>Antonios Papadopoulos</Title>
    <Img src={require('../../assets/symbol.svg')} />
  </MenuWrapper>
);

export default Menu;
