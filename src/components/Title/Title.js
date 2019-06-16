import React from 'react'
import styled from 'styled-components';

const TitleWrapper = styled.span`
  font-size: 2.4rem;
  color: var(--color-blue);
  font-family: 'Scania Sans Condensed';
  line-height: 3rem;
  font-weight: bold;
  `;


const Title = ({title}) => (
    <TitleWrapper>
      {title}
    </TitleWrapper>
  );


export default Title;
