import React from 'react';
import styled from 'styled-components';


import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';

const NotificationWrapper = styled.div`
    margin-left: 22rem;
`;

const NotificationBody = styled.div`
    padding: 3rem;
`;


const Header = styled.h1`
   font-size: 2.6rem;
    line-height: 3rem;
    font-weight:bold;
    margin-bottom: 3rem;
    font-family: 'Scania Sans Headline';
    color: var(--color-blue);
`;

const Notification = () => (
  <NotificationWrapper>
    <MenuBar />
    <NotificationBody>
      <Header> EMS 9 - Notifications</Header>
      <TaskTable notifications />
    </NotificationBody>
  </NotificationWrapper>
);

export default Notification;
