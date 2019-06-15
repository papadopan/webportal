import React, { useState } from 'react';
import styled from 'styled-components';

import Ul from '../Ul/Ul';
import Table from '../Table/Table';

const PopUpWrapper = styled.div`
    min-height: 100vh;
    width: 65rem;
    position: absolute;
    top:5rem;
    right:${props => (props.isOpened ? '0' : '-65rem')};
    display: flex;
    flex-direction:column;
    padding: 2.5rem 3.5rem;
    background: var(--color-lightGrey);
    overflow-y: scroll;
    overflow-x: scroll;
    z-index:1;
    opacity: ${props => (props.isOpened ? '1' : '0')}
    transition: all .5s;
    
`;

const Title = styled.h1`
    font-size: 1.4rem;
    color: var(--color-blue);
    font-weight: bold;
    line-height: 2rem;
    margin:1.5rem 0 ;
`;

const Exit = styled.span`
  font-size:1rem;
  line-height: 1.5rem;

  &:hover{
    cursor:pointer;
  }
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


const PopUp = ({ isOpened, clicked }) => (
  <PopUpWrapper isOpened={isOpened}>
    <Exit onClick={clicked}>
        X Close
    </Exit>
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
