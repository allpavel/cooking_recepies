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

    @media screen and (max-width: 1200px) {
        .text-container {
            padding: 3rem;
            font-size: 1rem;
        }

        .image-container {
            padding: 3rem 1rem;
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;

        .image-container {
            padding-top: 0;
            margin: 0 auto;
        }

        .text-container {
            padding: 1rem;
        }
    }
`;

const AboutContainer = styled.section`
    display: flex;
`;

const Text = styled.article`
    width: 50%;
    padding: 5rem 2rem 5rem 9rem;
    font-size: 1.2rem;

    h2 {
        margin: 0;
    }
`;

const Image = styled.article`
    width: 50%;
    margin: 3rem 0;
    padding: 2rem 3rem;
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
