import React from 'react';
import styled from 'styled-components';


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
    height:10px;
`;


const Summary = () => (
  <SummaryWrapper>
    <Title>
        Summary
    </Title>
    <Info />
  </SummaryWrapper>
);

export default Summary;
