import React, { useState } from 'react';
import styled from 'styled-components';


import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';
import PopUp from '../../components/PopUp/PopUp';
import Header from '../../components/Header/Header'

const UpcomingWrapper = styled.div`
    margin-left: 22rem;
    position: relative;
    @media ${props => props.theme.mediaQueries.large}{
      margin-left: 0;
    }
`;

const UpcomingBody = styled.div`
    padding: 3rem;
    opacity: ${props => (props.isOpened ? '0.3' : '1')}
`;



const Upcoming = () => {
  const [isOpened, setIsOpened] = useState(false);
  
  return (
    <UpcomingWrapper>
      <MenuBar />
      <PopUp isOpened={isOpened} upcoming clicked={() => setIsOpened(false)} />
      <UpcomingBody isOpened={isOpened}>
        <Header header="EMS 9 - Upcoming Tasks"/>
        <TaskTable upcoming clicked={() => setIsOpened(true)} />
      </UpcomingBody>
    </UpcomingWrapper>
  );
};

export default Upcoming;
