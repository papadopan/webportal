import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const MenuItemWrapper = styled.li``;

const MenuAnchor = styled.span`
    font-size:1.4rem;
    margin-right: ${props => (props.index === 0 ? '6rem' : '3rem')};
    color: ${props => (props.index === 0 ? 'var(--color-blue)' : 'var(--color-mediumGrey)')};
    font-weight : ${props => (props.index === 0 ? 'bold' : 'normal')};

    &:hover{
        color: var(--color-blue);
        cursor: pointer;
    }
`;


const MenuItem = ({ item, index }) => (
  <NavLink to={item} exact>
    <MenuItemWrapper>
      <MenuAnchor index={index}>
        {item}
      </MenuAnchor>
    </MenuItemWrapper>
  </NavLink>
);

MenuItem.propTypes = {
  item: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

export default MenuItem;
