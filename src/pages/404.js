import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        margin: 0;
        font-size: 6rem;
    }
    h3 {
        font-size: 2rem;
    }
`;

export default function Error() {
    return (
        <Layout>
            <Wrapper className="error-page">
                <section>
                    <h1>404</h1>
                    <h3>Page not found</h3>
                </section>
            </Wrapper>
        </Layout>
    );
}
