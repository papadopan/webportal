import React from 'react';
import styled from 'styled-components';

import Li from '../Li/Li';

const UL = styled.ul`
  border-bottom: ${props => (props.show ? '1px solid var(--color-lightGrey);' : '0px')};
  width: 100%;
  max-width:35rem;
`;

const Ul = ({
  items, show, box, link,
}) => (
  <UL show={show}>
    {
      items.map((item, index) => (
        <Li key={index} item={item} box={box} link={link} />
      ))
    }
  </UL>
);

export default Ul;
