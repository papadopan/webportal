import React from 'react';
import styled from 'styled-components';

import TaskTable from '../Table/Table';

const UpcomingWrapper = styled.div`
  flex:2;
  order:2;
`;

const Title = styled.h2`
    color: var(--color-blue);
    font-family: 'Scania Sans Condensed';
    font-size: 2.4rem;
    line-height: 3rem;
    margin-bottom:1.5rem;
`;


const UpcomingList = () => (
  <UpcomingWrapper>
    <Title>
      Upcoming Tasks
    </Title>
    <TaskTable />
  </UpcomingWrapper>
);

export default UpcomingList;
