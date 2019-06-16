import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

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

Layout.propTypes = {
  children: propTypes.element.isRequired,
};

export default Layout;
