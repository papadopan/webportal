import React, { useState } from 'react';
import styled from 'styled-components';

import PopUp from '../../components/PopUp/PopUp';
import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';

const HistoryWrapper = styled.div`
    margin-left: 22rem;
    position: relative;
`;

const HistoryBody = styled.div`
    padding: 3rem;
    opacity:${props => (props.isOpened ? '0.3' : '1')}
`;


const Header = styled.h1`
   font-size: 2.6rem;
    line-height: 3rem;
    font-weight:bold;
    margin-bottom: 3rem;
    font-family: 'Scania Sans Headline';
    color: var(--color-blue);
`;

const History = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <HistoryWrapper>
      <MenuBar />
      <PopUp isOpened={isOpened} clicked={() => setIsOpened(false)} history />
      <HistoryBody isOpened={isOpened}>
        <Header> EMS 9 - History</Header>
        <TaskTable history clicked={() => setIsOpened(true)} />
      </HistoryBody>
    </HistoryWrapper>
  );
};

export default History;
