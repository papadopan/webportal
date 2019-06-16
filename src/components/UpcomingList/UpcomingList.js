import React from 'react';
import styled from 'styled-components';

import TaskTable from '../Table/Table';
import Title from '../Title/Title'

const UpcomingWrapper = styled.div`
  flex:2;
  order:2;

  @media ${props => props.theme.mediaQueries.medium}{
    margin-bottom: 3rem;
  }
`;

const UpcomingList = () => (
  <UpcomingWrapper>
    <Title title="Upcoming Tasks"/>
    <TaskTable />
  </UpcomingWrapper>
);

export default UpcomingList;
