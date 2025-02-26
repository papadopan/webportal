import React from 'react';
import styled from 'styled-components';

import propTypes from 'prop-types';

import Ul from '../Ul/Ul';

const BoxWrapper = styled.div`
    width:24rem;
    height:17rem;
    background:var(--color-lightGrey);
    margin-right:1.5rem;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
    padding-top:1.5rem;
    margin-bottom: ${props => (props.row ? '0' : '1.5rem')}

    &:hover{
      cursor:pointer;
    }
`;

const Title = styled.span`
  font-size: 1.6rem;
  color: var(--color-blue);
  padding: 0 1.5rem;
  font-weight: bold;
`;


const Box = ({ title, textList }) => (
    <BoxWrapper>
      <Title>
        {title}
      </Title>
      <Ul items={textList} show={false} box />
    </BoxWrapper>
);


Box.propTypes = {
  title: propTypes.string.isRequired,
  textList: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string, 
      notification: propTypes.string,
      header: propTypes.string
    })
  ).isRequired,
};

export default Box;
