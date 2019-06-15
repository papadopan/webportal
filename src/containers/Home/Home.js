import React from 'react';
import styled from 'styled-components';

import ListBox from '../../components/ListBox/ListBox';
import Ecuboxes from '../../components/EcuBoxes/Ecuboxes';

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


const Home = () => (
  <HomeWrapper>
    <Header>
        Welcome to Support Desk
    </Header>
    <Title>
        Current ECUs
    </Title>
    <Ecuboxes />
  </HomeWrapper>
);

export default Home;
