import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout/Layout';
import RecipesList from '../components/RecipesList/RecipesList';
import Seo from '../components/SEO/SEO';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

    h2 {
        margin-left: 2rem;
    }
`;

const AboutContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;

const Text = styled.article`
    margin: 3rem 3rem;
    font-size: 1.2rem;

    h2 {
        margin: 0;
    }

    @media screen and (max-width: 815px) {
        margin: 0 2rem;
    }
`;

const Image = styled.article`
    margin: 3rem 2rem;

    @media screen and (max-width: 815px) {
        margin: 0 auto;
    }
`;

const query = graphql`
    {
        allContentfulRecipes(filter: { featured: { eq: true } }) {
            nodes {
                id
                title
                prepTime
                cookingTime
                servings
                image {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, width: 200)
                }
                content {
                    tags
                }
            }
        }
    }
`;

const About = () => {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipes.nodes;
    return (
        <Layout>
            <Seo title={'About'} />
            <Wrapper>
                <AboutContainer>
                    <Text>
                        <h2>About Us</h2>
                        <p>
                            Cooking Recipes is here to help you cook delicious meals with less stress and more joy. We
                            offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen
                            wins” is what we are all about.
                        </p>
                        <p>
                            Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time
                            and a place for canned, frozen, and other prepared ingredients. We believe in a diet that
                            includes a wide variety of foods: real butter and cream, extra virgin olive oil, eggs, lots
                            of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for
                            dessert.
                        </p>
                    </Text>
                    <Image>
                        <StaticImage
                            src="../assets/images/about.jpg"
                            placeholder="blurred"
                            width={600}
                            alt="about-image"
                        />
                    </Image>
                </AboutContainer>
                <h2>You might be interested in:</h2>
                <RecipesList recipes={recipes} />
            </Wrapper>
        </Layout>
    );
};

export default About;
