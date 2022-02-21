import React from 'react';
import { Link } from 'gatsby';
import { getTags } from '../../utils/getTags';

const TagsList = ({ recipes }) => {
    const tags = getTags(recipes);
    return (
        <>
            {tags.map(tag => (
                <Link to={`/tags/${tag[0]}`} key={tag[0]}>
                    <p>{tag[0]}</p>
                    <p>({tag[1]})</p>
                </Link>
            ))}
        </>
    );
};

export default TagsList;
