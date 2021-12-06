import React from 'react'
import Footer from './Footer';
import Header from './Header'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles';
import styled,{ ThemeProvider} from 'styled-components'
import { Helmet } from 'react-helmet';

const theme = {
    black: '#262626',
    yellow: '#ffc600',
    lightgrey: '#efefef',
    grey: '#3a3a3a'
}

const Layout = ({ children }) => {
    return(
        <ThemeProvider theme={theme}>   
            <StyledPage>
                <Helmet>
                    <link 
                        rel="stylesheet" 
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,900&amp;subset=cyrillic,cyrillic-ext" 
                    />
                </Helmet>
                <GlobalStyles/>
                <Header/>
                    <Content className="">{children}</Content>
                <Footer/>
            </StyledPage>
        </ThemeProvider>
    )
}

export default Layout;

const StyledPage = styled.div`
    background: #fff;
    color: ${props => props.theme.black}
`
const Content = styled.div`
    max-width: 900px;
    min-height: 40vw;
    padding: 6rem 1 rem;
    margin: 0 auto;
`

