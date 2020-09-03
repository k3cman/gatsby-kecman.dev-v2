import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo"
import PageHeader from "../components/shared/pageHeader";

const Blog = () => {
    return (
        <Layout>
            <SEO title="Blog posts" />
            <PageHeader>
                Blog posts
            </PageHeader>
        </Layout>
    )
}

export default Blog;