import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.button`
    width:62px;
    height:20px;
    font-size:1rem;
    border-radius:1rem;
    color:white;
    background: var(--color-teriary);
    border:0;
    outline:none;
    display: inline-block;
    margin-right: 1rem;
    font-family: 'Scania Sans'
`;

const Info = () => (
  <InfoWrapper>
    Info
  </InfoWrapper>
);

export default Info;
