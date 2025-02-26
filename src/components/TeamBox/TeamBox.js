import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TeamBoxWrapper = styled.div`
    height:10rem;
    width: 32rem;
    display: flex;
    font-size: 1.4rem;
    line-height:2rem;
    margin-bottom: 3rem;
`;

const TeamBoxDiv = styled.div`
    width:50%;
    color: var(--color-blue)
  `;

const TeamTitle = styled.div`
  flex:1;
  order:1;
  font-weight: bold;
`;

const TeamMembers = styled.div`
  flex:1;
  order:2;
  display:flex;
  flex-direction:column;
`;

const Member = styled.span`
  margin: 0 0 1rem 0;
  text-decoration: underline; 
`;

const TeamBox = ({ team }) => (
  <TeamBoxDiv>
    <TeamBoxWrapper>
      <TeamTitle>
        {team.title}
      </TeamTitle>
      <TeamMembers>
        {
            team.members.map((member, index) => (
              <Member key={index}>
                {member.name}
              </Member>
            ))
        }
      </TeamMembers>
    </TeamBoxWrapper>
  </TeamBoxDiv>
);

TeamBox.propTypes = {
  team: propTypes.node.isRequired,
};

export default TeamBox;
