import React from 'react';
import styled from 'styled-components';
import ListBox from '../../components/ListBox/ListBox';
import PopUp from '../../components/PopUp/PopUp';

const SopWrapper = styled.div`
    margin-left: 22rem;
    padding: 3rem;
`;

const Title = styled.h1`
    color: var(--color-blue);
    font-family: 'Scania Sans Headline';
    font-size: 2.6rem;

`;


const itemsList = [
  {
    results: [
      { title: 'Test Week:', notification: 'TW1902', header: 'SOP 1' },
      { title: 'Last Updated:', notification: '10/02/2019, 14:54' },
      { title: 'Updated by:', notification: 'Andrew Petersson' },
      { title: 'Approved Level:', notification: 'OTI' },
    ],
  },
  {
    results: [
      { title: 'Test Week:', notification: 'TW1905', header: 'SOP 2' },
      { title: 'Last Updated:', notification: '10/04/2019, 12:02' },
      { title: 'Updated by:', notification: 'Mike Johnson' },
      { title: 'Approved Level:', notification: 'R&D' },
    ],
  },
  {
    results: [
      { title: 'Test Week:', notification: 'TW1902', header: 'SOP 3' },
      { title: 'Last Updated:', notification: '12/04/2019, 09:23' },
      { title: 'Updated by:', notification: 'Jacob Johnsson' },
      { title: 'Approved Level:', notification: 'R&D' },
    ],
  },
  {
    results: [
      { title: 'Test Week:', notification: 'TW1902', header: 'SOP 4' },
      { title: 'Last Updated:', notification: '12/04/2019, 10:34' },
      { title: 'Updated by:', notification: 'Johan Andrew' },
      { title: 'Approved Level:', notification: 'OTI' },
    ],
  },
];


const Sop = () => (
  <SopWrapper>
    <Title>
        EMS 9 - SOP
    </Title>
    <ListBox row={false} itemsList={itemsList} />
    <PopUp />
  </SopWrapper>
);

export default Sop;
