import React from 'react';
import styled from 'styled-components';


import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';

const UpcomingWrapper = styled.div`
    margin-left: 22rem;
`;

const UpcomingBody = styled.div`
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

const Upcoming = () => (
  <UpcomingWrapper>
    <MenuBar />
    <UpcomingBody>
      <Header> EMS 9 - Upcoming Tasks</Header>
      <TaskTable upcoming />
    </UpcomingBody>
  </UpcomingWrapper>
);

export default Upcoming;
