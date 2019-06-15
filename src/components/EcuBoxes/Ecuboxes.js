import React from 'react';
import styled from 'styled-components';



import Box from '../Box/Box';


const EcuBoxWrapper = styled.div`
    height:100%
    width:100%;
    margin-top: 1.5rem;
    display: flex;
`;


const itemsList = [
  {
    results: [
      { title: 'Test Week:', notification: 'TW1905', header: 'EMS 9' },
      { title: 'Last Updated:', notification: '10/04/2019, 14:03' },
      { title: 'Updated by:', notification: 'Jacob Johnson' },
    ],
  },
  {
    results: [
      { title: 'Test Week:', notification: 'TW110', header: 'CMS 1' },
      { title: 'Last Updated:', notification: '12/04/2019, 15:34' },
      { title: 'Updated by:', notification: 'Jacob Johnson' },
    ],
  },
  {
    results: [
      { title: 'Test Week:', notification: 'TW1912', header: 'BMS 1' },
      { title: 'Last Updated:', notification: '10/04/2019, 14:03' },
      { title: 'Updated by:', notification: 'Peter Johnsson' },
    ],
  },
];

const Ecuboxes = () => (
  <EcuBoxWrapper>
    {
        itemsList.map((item, index) => (
          <Box textList={item.results} index={index} title={item.results[0].header} link="Overview" />
        ))
    }
  </EcuBoxWrapper>
);

export default Ecuboxes;
