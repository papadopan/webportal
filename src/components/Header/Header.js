import React from 'react'
import styled from 'styled-components';

const HeaderWrapper = styled.h1`
   font-size: 2.6rem;
    line-height: 3rem;
    font-weight:bold;
    margin-bottom: 3rem;
    font-family: 'Scania Sans Headline';
    color: var(--color-blue);
`;
const Header = ({header}) => {
    return (
        <HeaderWrapper>
            {header}
        </HeaderWrapper>
    )
}

export default Header
