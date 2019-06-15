import React from 'react';
import styled from 'styled-components';

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

export default ListBox;
