import React from 'react';
import styled from 'styled-components';
import Information from '../Information/Information';
import Title from '../Title/Title'

const SummaryWrapper = styled.div`
  flex:1;
    order:1;

    @media ${props=> props.theme.mediaQueries.medium}{
      width:100%;
      margin-bottom: 3rem;
    }
`;



const Info = styled.div`
  
`;


const Summary = () => (
  <SummaryWrapper>
    <Title title="Summary"/>
    <Info>
      <Information first="Test Week" second="TW 1903" />
      <Information first="Owner" second="Jacob Johnsson" />
      <Information first="Contact" second="javob@scania.com" />
      <Information first="Last Update" second="12 April 2019" />
      <Information first="Updated by:" second="Nikolas Johnsson" />
    </Info>
  </SummaryWrapper>
);

export default Summary;
