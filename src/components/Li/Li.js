import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';


const LiItem = styled.li`
  
  line-height:2rem;
  font-size: ${props => (props.box ? '1rem' : '1.4rem')};
  height:${props => (props.box ? '3rem' : '4rem')};
  width:100%;
  display:flex;
  align-items:center;
  text-transform:uppercase;
  justify-content: space-between;
  padding: ${props => (props.side ? '0rem' : '0 1.5rem')};
  margin-top : ${props => (props.box ? '.5rem' : '')};
  color: ${props => (props.box ? 'var(--color-darkGrey)' : 'var(--color-white)')};

  &:hover{
    background: ${props => (props.box ? '' : 'black')};
    color: ${props => (props.box ? 'var(--color-darkGrey)' : 'var(--color-white)')};
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-weight : ${props => (props.bold ? 'bold' : 'normal')}
`;

const Li = ({
  item, box, side,
  }) => (
    <LiItem box={box} side={side}>
      <Span bold={false}>
        {item.title}
      </Span>
      <Span bold>
        {item.notification}
      </Span>
    </LiItem>
);

Li.propTypes = {
  item: propTypes.shape({
    title: propTypes.string.isRequired,
    notification: propTypes.string,
  }).isRequired,
  box: propTypes.bool.isRequired,
  link: propTypes.string,
  side: propTypes.bool,
};

Li.defaultProps = {
  side: false,
  link: '',
};

export default Li;
