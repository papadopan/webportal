import React from 'react';
import styled from 'styled-components';

const CompleteWrapper = styled.button`
    width:62px;
    height:20px;
    font-size:1rem;
    border-radius:1rem;
    color:white;
    background: var(--color-green);
    border:0;
    outline:none;
    display: inline-block;
`;

const Complete = () => (
  <CompleteWrapper>
    Complete
  </CompleteWrapper>
);

export default Complete;
