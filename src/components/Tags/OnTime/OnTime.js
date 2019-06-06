import React from 'react';
import styled from 'styled-components';

const OnTimeWrapper = styled.div`

`;

const Img = styled.img`
    width:14px;
    height:12px;
`;

const Text = styled.span`
    vertical-align;:center;
    color: var(--color-blue);
    margin-left:1rem;
`;

const OnTime = () => (
  <OnTimeWrapper>
    <Img src={require('./../../../assets/clock.svg')} />
    <Text>
        On-Time
    </Text>
  </OnTimeWrapper>
);

export default OnTime;
