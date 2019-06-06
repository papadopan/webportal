import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-family: 'Scania Sans';
    font-size: 62.5%;
    box-sizing:border-box;
    --color-blue: ${props => props.theme.colors.blue};
    --color-white: ${props => props.theme.colors.white};
    --color-red: ${props => props.theme.colors.red};
    --color-black: ${props => props.theme.colors.black};
    --color-lightGrey: ${props => props.theme.colors.lightGrey};
    --color-mediumGrey: ${props => props.theme.colors.mediumGrey};
    --color-darkGrey: ${props => props.theme.colors.darkGrey};
    --color-orange: ${props => props.theme.colors.orange};
    --color-beige: ${props => props.theme.colors.beige};
    --color-paleGreen: ${props => props.theme.colors.paleGreen};
    --color-green: ${props => props.theme.colors.green};
    --color-teriary: ${props => props.theme.colors.teriary};
    
    @media ${props => props.theme.mediaQueries.smaller}{
    font-size: 60%;
    color:red;
    }

    @media ${props => props.theme.mediaQueries.smallest}{
        font-size: 50%;
        color:blue;
    }
}

a, button, textarea, input{
    outline:none;
    text-decoration: none;
    font-family: inherit;
}

`;
