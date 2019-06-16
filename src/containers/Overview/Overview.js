import React from 'react';
import styled from 'styled-components';

import MenuBar from '../../components/MenuBar/MenuBar';
import Summary from '../../components/Summary/Summary';
import UpcomingList from '../../components/UpcomingList/UpcomingList';
import TimelineVis from '../../components/Timeline';
import Header from '../../components/Header/Header'

const OverviewWrapper = styled.div`
    margin-left:22rem;

  @media ${props=> props.theme.mediaQueries.large}{
    margin-left:0;
  }
`;

const OverviewBody = styled.div`
  padding: 3rem;
`;



const Row = styled.div`
  display:flex;
  padding-top:3rem;

  @media ${props=> props.theme.mediaQueries.medium}{
    flex-direction:column
  }
`;


const Overview = () => (
  <OverviewWrapper>
    <MenuBar />
    <OverviewBody>
      <Header header="EMS 9 - Overview"/>
      <Row>
        <Summary />
        <UpcomingList />
      </Row>
      <Header header="Timeline"/>
      <TimelineVis />
    </OverviewBody>
  </OverviewWrapper>
);


export default Overview;
