import React, { useState } from 'react';
import styled from 'styled-components';


import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';
import PopUp from '../../components/PopUp/PopUp';
import Header from '../../components/Header/Header'

const NotificationWrapper = styled.div`
    margin-left: 22rem;
    position: relative;
    @media ${props => props.theme.mediaQueries.large}{
      margin-left: 0;
    }
`;

const NotificationBody = styled.div`
    padding: 3rem;
    opacity: ${props => (props.isOpened ? '0.3' : '1')}
`;


const Notification = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <NotificationWrapper>
      <MenuBar />
      <PopUp isOpened={isOpened} notification clicked={() => setIsOpened(false)} />
      <NotificationBody isOpened={isOpened}>
        <Header header="EMS 9 - Notifications"/>
        <TaskTable notifications clicked={() => setIsOpened(true)} />
      </NotificationBody>
    </NotificationWrapper>
  );
};
export default Notification;
