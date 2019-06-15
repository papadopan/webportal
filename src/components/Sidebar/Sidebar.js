import React from 'react';
import styled from 'styled-components';

import Section from '../Section/Section';
import Ul from '../Ul/Ul';

const SidebarWrapper = styled.div`
    width:22rem;
    position:fixed;
    top:8rem;
    left:0;
    min-height: calc(100vh-8rem);
    background: var(--color-blue);
    height:100%;
    padding-top: 1.5rem;
`;

const routerList = [{ title: 'dashboard' }];
const ecuList = [{ title: 'EMS 9', notification: '4' }, { title: 'CMS 1' }, { title: 'BMS 2', notification: '2' }];
const favouritesList = [{ title: 'BMS 1', notification: '3' }, { title: 'CMS 5', notification: '6' }];

const Sidebar = () => (
  <SidebarWrapper>
    <Ul items={routerList} show link="/" />
    <Section title="Your ECU" items={ecuList} />
    <Section title="Favourites" items={favouritesList} />
  </SidebarWrapper>
);

export default Sidebar;
