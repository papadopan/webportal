import React from 'react';
import styled from 'styled-components';

import Ul from '../Ul/Ul';
import Table from '../Table/Table';

const PopUpWrapper = styled.div`
    min-height: calc(100vh - 8rem);
    width: 65rem;
    position: absolute;
    top:8rem;
    right:0;
    display: flex;
    flex-direction:column;
    padding: 2.5rem 3.5rem;
    background: var(--color-lightGrey);
    overflow-y: scroll;
    overflow-x: hidden;
    z-index:1;
`;

const Title = styled.h1`
    font-size: 1.4rem;
    color: var(--color-blue);
    font-weight: bold;
    line-height: 2rem;
    margin:1.4rem 0 ;
`;

const itemsList = [
  { title: 'Test Week:', notification: 'TW1902', header: 'SOP 1' },
  { title: 'Last Updated:', notification: '10/02/2019, 14:54' },
  { title: 'Updated by:', notification: 'Petersson' },
  { title: 'Suggested Level:', notification: 'PROD' },
  { title: 'Approved Level:', notification: 'OTI' },
  { title: 'Point of contact:', notification: 'Nickolas John' },
  { title: 'Description :', notification: '..........' },

];


const PopUp = () => (
  <PopUpWrapper>
    <Title>
        EMS 9 - SOP 1
    </Title>
    <Ul items={itemsList} show={false} box link="" side />
    <Title>
        Upcoming Tasks
    </Title>
    <Table />
    <Title>
        Completed Tasks
    </Title>
    <Table />
  </PopUpWrapper>
);

export default PopUp;
