import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

const Seo = ({ title, description }) => {
    const { site } = useStaticQuery(query);
    const metaDescription = description || site.siteMetadata.description;
    return (
        <Helmet>
            <html lang="en" />
            <title>{`${title} | ${site.siteMetadata.title}`}</title>
            <meta name="description" content={metaDescription} />
        </Helmet>
    );
};

export default Seo;
