import React from 'react';
import styled from 'styled-components';

import ListBox from '../../components/ListBox/ListBox';

const HomeWrapper = styled.div`
    margin-left:26.5rem;
    padding-top: 3rem;
`;

const Header = styled.h1`
    font-size: 2.6rem;
    line-height: 3rem;
    font-weight:bold;
    margin-bottom: 3rem;
    font-family: 'Scania Sans Headline';
    color: var(--color-blue);
`;
const Title = styled.div`
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight:bold;
    color: var(--color-blue);
`;

const itemsList = [
  {
    results: [
      { title: 'Test Week:', notification: 'TW1905', header: 'EMS 9' },
      { title: 'Last Updated:', notification: '10/04/2019, 14:03' },
      { title: 'Updated by:', notification: 'Jacob Johnson' },
    ],
  },
  {
    results: [
      { title: 'Test Week:', notification: 'TW110', header: 'CMS 1' },
      { title: 'Last Updated:', notification: '12/04/2019, 15:34' },
      { title: 'Updated by:', notification: 'Jacob Johnson' },
    ],
  },
  {
    results: [
      { title: 'Test Week:', notification: 'TW1912', header: 'BMS 1' },
      { title: 'Last Updated:', notification: '10/04/2019, 14:03' },
      { title: 'Updated by:', notification: 'Peter Johnsson' },
    ],
  },
];
const Home = () => (
  <HomeWrapper>
    <Header>
        Welcome to Support Desk
    </Header>
    <Title>
        Current ECUs
    </Title>
    <ListBox row itemsList={itemsList} />

  </HomeWrapper>
);

export default Home;
