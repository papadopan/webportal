import React from 'react';
import styled from 'styled-components';
import Information from '../Information/Information';


const SummaryWrapper = styled.div`
    width:30%;
    flex:1;
    order:1
`;

const Title = styled.h2`
    color: var(--color-blue);
    font-family: 'Scania Sans Condensed';
    font-size: 2.4rem;
    line-height: 3rem;
`;

const Info = styled.div`
    
`;


const Summary = () => (
  <SummaryWrapper>
    <Title>
        Summary
    </Title>
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
