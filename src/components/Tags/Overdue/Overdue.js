import React from 'react';
import styled from 'styled-components';

const OverDueWrapper = styled.div`

`;

const Img = styled.img`
    width:14px;
    height:12px;
`;

const Text = styled.span`
    vertical-align;:center;
    color: var(--color-red);
    margin-left:1rem;
`;

const Overdue = () => (
  <OverDueWrapper>
    <Img src={require('./../../../assets/overdue.svg')} />
    <Text>
        Overdue
    </Text>
  </OverDueWrapper>
);

export default Overdue;
