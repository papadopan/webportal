import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';


import Box from '../Box/Box';

const ListBoxWrapper = styled.div`
    height:100%
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
  }
`;


const ListBox = ({ itemsList, clicked }) => (
  <ListBoxWrapper onClick={clicked}>
    {
      itemsList.map((item, index) => (
        <Box textList={item.results} index={index} title={item.results[0].header} />
      ))
    }
  </ListBoxWrapper>
);

ListBox.propTypes = {
  itemsList: propTypes.node.isRequired,
  clicked: propTypes.func.isRequired,
};

export default ListBox;
