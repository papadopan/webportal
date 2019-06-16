import React from 'react';
import styled from 'styled-components';

import Ecuboxes from '../../components/EcuBoxes/Ecuboxes';
import Timeline from '../../components/Timeline';
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';

const HomeWrapper = styled.div`
    margin-left:26.5rem;
    padding-top: 3rem;
    padding-right: 3rem;
    @media ${props => props.theme.mediaQueries.large}{
      margin-left: 3.5rem;
    }
`;

const Home = () => (
  <HomeWrapper>
    <Header header=" Welcome to Support Desk"/>
    <Title>
        Current ECUs
    </Title>
    <Ecuboxes />
    <Title title="Timeline"/>
    <Timeline />
  </HomeWrapper>
);

export default Home;
