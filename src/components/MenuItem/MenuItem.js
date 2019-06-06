import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuItemWrapper = styled.li``;

const MenuAnchor = styled.a`
    font-size:1.4rem;
    margin-right: ${props => (props.index === 0 ? '6rem' : '3rem')};
    color: ${props => (props.index === 0 ? 'var(--color-blue)' : 'var(--color-mediumGrey)')};
    font-weight : ${props => (props.index === 0 ? 'bold' : 'normal')};

    &:hover{
        color: var(--color-blue);
        cursor: pointer;
    }
`;

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    color: red;
  }`;

const MenuItem = ({ item, index }) => (
  <StyledNavLink to={item} exact activeClassName>
    <MenuItemWrapper>
      <MenuAnchor index={index}>
        {item}
      </MenuAnchor>
    </MenuItemWrapper>
  </StyledNavLink>
);

export default MenuItem;
