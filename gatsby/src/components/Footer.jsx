import { Link } from 'gatsby';
import React from 'react'
import FooterStyles from '../styles/FooterStyles'
import SignupForm from './SignupForm';


const Footer = () => {
    return(
        <FooterStyles>
            <div className="wrapperForm">
                <legend>
                    <span className="formAction">Подписаться</span> на нашу рассылку!
                </legend>
                <SignupForm />
            </div>
            <div className="wrapperMain">
                <Link to='/'>Fresh Blog </Link>
                &copy; {new Date().getFullYear()}
            </div>
        </FooterStyles>
    )
}

export default Footer;