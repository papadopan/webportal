import React from 'react';
import styled from 'styled-components';
import MenuBar from '../../components/MenuBar/MenuBar';
import TeamBox from '../../components/TeamBox/TeamBox';
import Header from '../../components/Header/Header'


const TeamWrapper = styled.div`
    margin-left:22rem;
    @media ${props => props.theme.mediaQueries.large}{
      margin-left: 0;
    }
`;

const TeamBody = styled.div`
    padding: 3rem;
`;

const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const people = [
  {
    title: 'System Owners',
    members: [
      { name: 'Marc Johnsson' },
      { name: 'Nickolas Johan' },
      { name: 'Peter Nickolo' },
    ],
  },
  {
    title: 'SCOMM',
    members: [
      { name: 'Karin Frimodt' },
      { name: 'Martin' },
      { name: 'Zoheb Mohmmed' },
    ],
  },
  {
    title: 'Function Owners',
    members: [
      { name: 'Fredrik Johan' },
      { name: 'Johan' },
      { name: 'Anders' },
    ],
  },
  {
    title: 'PSM',
    members: [
      { name: 'Fredrik Johan' },
      { name: 'Johan' },
      { name: 'Anders' },
    ],
  },
  {
    title: 'SPIN',
    members: [
      { name: 'Karin' },
      { name: 'Tommy' },
      { name: 'Anders' },
    ],
  },
  {
    title: 'Integration Test',
    members: [
      { name: 'Karin' },
      { name: 'Martin' },
      { name: 'Tommy' },
    ],
  },
  {
    title: 'Field Test',
    members: [
      { name: 'Jacob' },
      { name: 'Karin' },
      { name: 'Anders' },
    ],
  },
];

const Team = () => (
  <TeamWrapper>
    <MenuBar />
    <TeamBody>
      <Header header="EMS 9 - TEAM"/>
      <Row>
        {
          people.map((team, index) => <TeamBox key={index} team={team} />)
        }
      </Row>
    </TeamBody>
  </TeamWrapper>
);

export default Team;
