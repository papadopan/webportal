import React from 'react';
import styled from 'styled-components';
import MenuBar from '../../components/MenuBar/MenuBar';
import TeamBox from '../../components/TeamBox/TeamBox';


const TeamWrapper = styled.div`
    margin-left:22rem;
`;

const TeamBody = styled.div`
    padding: 3rem;
`;

const Header = styled.h1`
   font-size: 2.6rem;
    line-height: 3rem;
    font-weight:bold;
    margin-bottom: 3rem;
    font-family: 'Scania Sans Headline';
    color: var(--color-blue);
`;
const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const people = [
  {
    title: 'System Owners',
    members: [
      { name: 'Jacob Johnsson' },
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
      <Header>
          ems 9 - team
      </Header>
      <Row>
        {
            people.map((team, index) => <TeamBox key={index} team={team} />)
        }
      </Row>
    </TeamBody>
  </TeamWrapper>
);

export default Team;
