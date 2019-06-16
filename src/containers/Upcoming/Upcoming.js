import React, { useState } from 'react';
import styled from 'styled-components';


import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';
import PopUp from '../../components/PopUp/PopUp';

const UpcomingWrapper = styled.div`
    margin-left: 22rem;
    position: relative;
`;

const UpcomingBody = styled.div`
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

const Upcoming = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <UpcomingWrapper>
      <MenuBar />
      <PopUp isOpened={isOpened} upcoming clicked={() => setIsOpened(false)} />
      <UpcomingBody isOpened={isOpened}>
        <Header> EMS 9 - Upcoming Tasks</Header>
        <TaskTable upcoming clicked={() => setIsOpened(true)} />
      </UpcomingBody>
    </UpcomingWrapper>
  );
};

export default Upcoming;
