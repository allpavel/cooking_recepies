import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';

const Wrapper = styled.main`
    flex: 1 0 auto;
`;

const Tags = () => {
    return (
        <Layout>
            <Wrapper>
                <h1>tags page</h1>
            </Wrapper>
        </Layout>
    );
};

export default Tags;
