import React from 'react';
import styled from 'styled-components';

import MenuItemList from '../MenuItemList/MenuItemList';

const MenuBarWrapper = styled.div`
  height:5rem;
  width:100%;
  border : 1px solid var(--color-lightGrey)
`;

const MenuBar = () => (
  <MenuBarWrapper>
    <MenuItemList />
  </MenuBarWrapper>
);

export default MenuBar;
