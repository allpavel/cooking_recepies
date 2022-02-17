import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HeroImage = () => {
    return (
            <StaticImage
                src="../../assets/images/hero.jpg"
                alt="cooking-people"
                placeholder="blurred"
                layout="constrained"
                aspectRatio={16 / 6}
                width={1280}
                objectFit="cover"
            />
    );
};

export default HeroImage;
