import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogPosts from '../components/BlogPosts';
import Pagination from '../components/Pagination';
import Meta from '../components/Meta';

const FrontPage = ({ data, pageContext }) => {
    const { posts } = data
    return(
        <Layout>
            <Meta title="Home page"></Meta>
            <h1>Главная страница</h1>
            <p>Наша главная страница</p>
            <BlogPosts posts={posts.nodes}/>
            <Pagination pageContext={pageContext}/>
        </Layout>
    )
}

export default FrontPage;

export const query = graphql`
    query($limit: Int = 4, $skip: Int = 0) {
        posts: allSanityPost(limit: $limit, skip: $skip) {
            nodes {
                id
                title
                _updatedAt(formatString: "DD-MM-YYYY")
                body
                categories {
                    title
                    id
                }
                slug {
                    current
                }
                image {
                    asset {
                        fluid(maxWidth: 410) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;