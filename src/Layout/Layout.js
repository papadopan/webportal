import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const LayoutWrapper = styled.div`
    width:100%;
    min-height:calc(100vh - 8rem);
    margin-top: 8rem;
`;


const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <Sidebar />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </React.Fragment>
);

export default Layout;
