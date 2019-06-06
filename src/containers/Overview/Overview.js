import React from 'react';
import styled from 'styled-components';

import MenuBar from '../../components/MenuBar/MenuBar';
import Summary from '../../components/Summary/Summary';
import UpcomingList from '../../components/UpcomingList/UpcomingList';

const OverviewWrapper = styled.div`
    margin-left:22rem;
`;

const OverviewBody = styled.div`
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  color: var(--color-blue);
  font-family:'Scania Sans Headline';
`;

const Row = styled.div`
  display:flex;
  padding-top:3rem;
`;


const Overview = () => (
  <OverviewWrapper>
    <MenuBar />
    <OverviewBody>
      <Title>
        EMS 9 - Overview
      </Title>
      <Row>
        <Summary />
        <UpcomingList />
      </Row>
    </OverviewBody>
  </OverviewWrapper>
);


export default Overview;
