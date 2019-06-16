import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Img = styled.img`
    background-repeat: no-repeat;
    background-size: 169px 28px;
    width: 169px;
    height: 28px;    
    display: inline-block;
    vertical-align: middle;
`;

const Line = styled.div`
    height:2rem;   
    width:1px;
    background: var(--color-darkGrey);
    margin-left: 2rem;
    margin-top:.3rem;
`;
const LogoWrapper = styled.div`
    display:flex;
    flex-flow:row;
`;
const Title = styled.h1`
  margin-top:.3rem;
  font-family: 'Scania Sans Headline';
  margin-left: 1rem;
  font-weight: normal;
  color: var(--color-blue);
`;

const Logo = () => (
  <LogoWrapper>
    <NavLink to="/">
      <Img src={require('../../assets/logo.svg')} />
    </NavLink>
    <Line />
    <Title>Help Desk</Title>
  </LogoWrapper>

);

export default Logo;
