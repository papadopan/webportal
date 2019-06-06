import React from 'react';
import styled from 'styled-components';
import MenuItem from '../MenuItem/MenuItem';

const MenuItemListWrapper = styled.ul`
    padding:1.5rem 3rem;
    display: flex;
    list-style:none;
`;

const itemsList = ['EMS 9', 'Overview', 'SOP', 'Documentation', 'Team', 'History', 'Upcoming Task', 'Notification'];

const MenuItemList = () => (
  <MenuItemListWrapper>
    {
        itemsList.map((item, index) => (
          <MenuItem key={index} item={item} index={index} />
        ))
    }
  </MenuItemListWrapper>
);

export default MenuItemList;
