import React from 'react';
import styled from 'styled-components';


const InfomrationWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    padding:3rem 10rem 0 1rem;
`;

const Span = styled.span`
    font-size:1.4rem;
    line-height: 2rem;
    color: var(--color-blue)
`;

const Information = ({ first, second }) => (
  <InfomrationWrapper>
    <Span>{first}</Span>
    <Span>{second}</Span>
  </InfomrationWrapper>
);

export default Information;
