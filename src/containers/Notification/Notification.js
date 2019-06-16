import React, { useState } from 'react';
import styled from 'styled-components';


import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';
import PopUp from '../../components/PopUp/PopUp';

const NotificationWrapper = styled.div`
    margin-left: 22rem;
    position: relative;
`;

const NotificationBody = styled.div`
    padding: 3rem;
    opacity: ${props => (props.isOpened ? '0.3' : '1')}
`;


const Header = styled.h1`
   font-size: 2.6rem;
    line-height: 3rem;
    font-weight:bold;
    margin-bottom: 3rem;
    font-family: 'Scania Sans Headline';
    color: var(--color-blue);
`;

const Notification = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <NotificationWrapper>
      <MenuBar />
      <PopUp isOpened={isOpened} notification clicked={() => setIsOpened(false)} />
      <NotificationBody isOpened={isOpened}>
        <Header> EMS 9 - Notifications</Header>
        <TaskTable notifications clicked={() => setIsOpened(true)} />
      </NotificationBody>
    </NotificationWrapper>
  );
};
export default Notification;
