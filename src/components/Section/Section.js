import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

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

Section.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      notification: propTypes.string,
    }),
  ).isRequired,
};

export default Section;
