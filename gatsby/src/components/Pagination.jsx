import React from 'react';
import { Link } from 'gatsby';
import PaginationStyles from "../styles/PaginationStyles";
import styled from 'styled-components';

const Pagination = ({ pageContext }) => {
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}` ;
    const nextPage = currentPage + 1;
    return(
        <PaginationStyles>
            <Link to={`${prevPage}`} aria-disabled={isFirst}>Назад</Link>
            <TotalPages>
                Страница {currentPage} из {numPages}    
            </TotalPages>
            <Link to={`/page/${nextPage}`} aria-disabled={isLast}>Вперед</Link>
        </PaginationStyles>
    )
};

export default Pagination;

const TotalPages = styled.p`
 @media only screen and (max-width: 390px) {
     display: none;
 }
`