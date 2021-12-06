import React from 'react'
import BlogPosts from '../components/BlogPosts';
import Layout from '../components/Layout';
import { CATEGORY_LABEL_LIST } from '../constants';
import Meta from '../components/Meta';

const SingleCategory = ({ pageContext, location}) => {
    const { posts, categoryTitle } = pageContext;

    const postsForCategory = posts.nodes.filter(post => 
        post.categories.some(category => category.title === categoryTitle)
    )
    return(
        <Layout>
            <Meta 
                title={CATEGORY_LABEL_LIST[categoryTitle]}
                description={`${CATEGORY_LABEL_LIST[categoryTitle]}: все о путешествиях!`}
            >
                <link rel="canonical" href={location.href} />
            </Meta>
            <BlogPosts posts={postsForCategory}/>
        </Layout>
    )
}

export default SingleCategory;