import React from 'react';
import styled from 'styled-components';

import Box from '../Box/Box';

const ListBoxWrapper = styled.div`
    height:100%
    width:100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: ${props => (props.row ? 'row' : 'column')}
`;


const ListBox = ({ row, itemsList }) => (
  <ListBoxWrapper row={row}>
    {
      itemsList.map((item, index) => (
        <Box textList={item.results} row={row} index={index} title={item.results[0].header} />
      ))
    }
  </ListBoxWrapper>
);

export default ListBox;
