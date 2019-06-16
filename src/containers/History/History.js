import React, { useState } from 'react';
import styled from 'styled-components';

import PopUp from '../../components/PopUp/PopUp';
import TaskTable from '../../components/Table/Table';
import MenuBar from '../../components/MenuBar/MenuBar';
import Header from '../../components/Header/Header'

const HistoryWrapper = styled.div`
    margin-left: 22rem;
    position: relative;
    @media ${props => props.theme.mediaQueries.large}{
      margin-left: 0;
    }
`;

const HistoryBody = styled.div`
    padding: 3rem;
    opacity:${props => (props.isOpened ? '0.3' : '1')}
`;


const History = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <HistoryWrapper>
      <MenuBar />
      <PopUp isOpened={isOpened} clicked={() => setIsOpened(false)} history />
      <HistoryBody isOpened={isOpened}>
        <Header header="EMS 9 - History"/>
        <TaskTable history clicked={() => setIsOpened(true)} />
      </HistoryBody>
    </HistoryWrapper>
  );
};

export default History;
