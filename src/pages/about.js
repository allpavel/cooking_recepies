import React from 'react';
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

    .text-container {
        padding: 5rem 2rem 5rem 9rem;
        font-size: 1.2rem;
    }

    .text-container h2 {
        margin: 0;
    }

    .image-container {
        padding: 5rem 3rem;
        margin: auto 0;
    }

    .image {
        object-fit: contain;
        max-height: 100%;
    }

    @media screen and (max-width: 1100px) {
        .text-container {
            padding: 3rem;
            font-size: 1rem;
        }

        .image-container {
            padding: 3rem 1rem;
        }
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;

        .image-container {
            display: none;
        }

        .text-container {
            padding: 1rem;
        }
    }
`;

const About = () => {
    return (
        <>
            <Layout>
                <Wrapper>
                    <article className="text-container">
                        <h2>About Us</h2>
                        <p>
                            Cooking Recipes is here to help you cook delicious
                            meals with less stress and more joy. We offer
                            recipes and cooking advice for home cooks, by home
                            cooks. Helping create “kitchen wins” is what we are
                            all about.
                        </p>
                        <p>
                            Our recipes primarily use fresh, unprocessed
                            ingredients but we also believe there is a time and
                            a place for canned, frozen, and other prepared
                            ingredients. We believe in a diet that includes a
                            wide variety of foods: real butter and cream, extra
                            virgin olive oil, eggs, lots of fruits and
                            vegetables, and protein from meat, fish, beans, and
                            cheese. Plus cake for dessert.
                        </p>
                    </article>
                    <article className="image-container">
                        <StaticImage
                            src="../assets/images/about.jpg"
                            placeholder="blurred"
                            width={600}
                        />
                    </article>
                </Wrapper>
            </Layout>
        </>
    );
};

export default About;
