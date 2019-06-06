import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const LiItem = styled.li`
  color: var(--color-darkGrey);
  line-height:2rem;
  font-size: ${props => (props.box ? '1rem' : '1.4rem')}
  height:${props => (props.box ? '3rem' : '4rem')};
  width:100%;
  display:flex;
  align-items:center;
  text-transform:uppercase;
  justify-content: space-between;
  padding: ${props => (props.side ? '0rem' : '0 1.5rem')};
  margin-top : ${props => (props.box ? '.5rem' : '')};

  &:hover{
    background: ${props => (props.box ? '' : 'black')};
    color: ${props => (props.box ? 'var(--color-darkGrey)' : 'var(--color-white)')};
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-weight : ${props => (props.bold ? 'bold' : 'normal')}
`;

const Li = ({
  item, box, link, side,
}) => (
  <NavLink to={link}>
    <LiItem box={box} side={side}>
      <Span bold={false}>
        {item.title}
      </Span>
      <Span bold>
        {item.notification}
      </Span>
    </LiItem>
  </NavLink>
);

export default Li;
