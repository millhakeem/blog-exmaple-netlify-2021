import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SinglePostStyles from '../styles/SinglePostStyles';
import ItemCard from '../components/ItemCard';
import Meta from '../components/Meta';
import Img from 'gatsby-image';
import { CATEGORY_LABEL_LIST } from '../constants';

const SinglePost = ({ data, pageContext }) => {
    const { post } = data;
    const { previous, next } = pageContext;
    return(
        <Layout>
            <Meta title={post.title}></Meta>
            <SinglePostStyles>
                <h1>{post.title}</h1>
                <div className="singlePostMeta">
                    {post.categories.map(category => (
                        <span key={category.id} className="tagTitle">{CATEGORY_LABEL_LIST[category.title]}</span>
                    ))}
                    <span className="postDate">Обновлено {post._updatedAt}</span>
                </div>
                <Img fluid={post.image.asset.fluid} />
                <p>{post.body}</p>
                <hr />
                <h3>Еще статьи... </h3>
                <div className="moreItems">
                        {previous && <ItemCard post={previous}/>}
                        {next && <ItemCard post={next}/>}
                </div>   
            </SinglePostStyles>
        </Layout>
    )
};

export default SinglePost;

export const query = graphql`
    query($slug: String!) {
        post: sanityPost(slug: {current: {eq: $slug}}) {
            id
            body
            title
            _updatedAt(formatString: "DD-MM-YYYY")
            categories {
                title
                id
            }
            slug {
                current
            }
            image {
                asset {
                    fluid(maxWidth:1000) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
}
`;