import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Ul from '../Ul/Ul';

const BoxWrapper = styled.div`
    width:24rem;
    height:17rem;
    background:var(--color-lightGrey);
    margin-right:1.5rem;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
    padding-top:1.5rem;
    margin-bottom: ${props => (props.row ? '0' : '1.5rem')}
`;

const Title = styled.span`
  font-size: 1.6rem;
  color: var(--color-blue);
  padding: 0 1.5rem;
  font-weight: bold;
`;


const Box = ({ title, textList, row }) => (
  <NavLink to="Overview">
    <BoxWrapper row={row}>
      <Title>
        {title}
      </Title>
      <Ul items={textList} show={false} box link="Overview" />
    </BoxWrapper>
  </NavLink>
);

export default Box;
