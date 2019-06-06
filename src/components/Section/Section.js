import React from 'react';
import styled from 'styled-components';

import Ul from '../Ul/Ul';

const SectionWrapper = styled.div`
padding-top:1.5rem;

`;

const Title = styled.div`
  padding-left:1.5rem;
  color: var(--color-darkGrey);
   line-height:2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
`;


const Section = ({ title, items }) => (
  <SectionWrapper>
    <Title>
      { title }
    </Title>
    <Ul items={items} show link="/Overview" />
  </SectionWrapper>

);

export default Section;
