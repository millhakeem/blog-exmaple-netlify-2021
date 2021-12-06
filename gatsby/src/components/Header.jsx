import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { SiHellofresh } from 'react-icons/si';


const Header = () => {
    return(
        <Container>
            <Wrapper>
                <Link to="/">
                    <h1>
                        <SiHellofresh/> Fresh Blog
                    </h1>    
                </Link>
                
            </Wrapper>
        </Container>
    )
}

export default Header;

const Container = styled.header`
    background: #fff;
    box-shadow: rgba(0,0,0, 0.06) 0px 4px 4px;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    h1 {
        display: flex;
        align-items: center;
        margin: 0;
        font-size: 28px;
        font-family: 'Balsamiq Sans', cursive;
        font-weight: 700; 
    }
    a {
        color: ${props => props.theme.black};
        text-decoration: none;
        svg {
            fill: ${props => props.theme.yellow};
            width: 40px;
            height: 40px;
        }
    }
`