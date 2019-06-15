import React from 'react';
import styled from 'styled-components';


import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';

const HistoryWrapper = styled.div`
    margin-left: 22rem;
`;

const HistoryBody = styled.div`
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

const History = () => (
  <HistoryWrapper>
    <MenuBar />
    <HistoryBody>
      <Header> EMS 9 - History</Header>
      <TaskTable history />
    </HistoryBody>
  </HistoryWrapper>
);

export default History;
