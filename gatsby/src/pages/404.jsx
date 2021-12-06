import React from 'react';
import Layout from '../components/Layout';
import Meta from '../components/Meta';

const NotFoundPage = () => {
    return(
        <Layout>
            <Meta title="404: Страница Не Найдена"/>
            <h1>404</h1>
            <p>Страница не найдена 8(</p>
        </Layout>
    )
}

export default NotFoundPage;