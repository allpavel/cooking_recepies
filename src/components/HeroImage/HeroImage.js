import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HeroImage = () => {
    return (
            <StaticImage
                src="../../assets/images/hero.jpg"
                alt="cooking-people"
                placeholder="blurred"
                layout="fullWidth"
            />
    );
};

export default HeroImage;
