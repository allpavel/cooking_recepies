import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenuFold, AiOutlineCloseCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Menu from '../Menu/Menu';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Wrapper = styled.div`
position: relative;
    display: none;
    

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        float: right;
    }
`;

const Content = styled.div`
        @media screen and (max-width: 800px) {
            position: absolute;
            width: 100vw;
            background-color: rgba(247, 247, 247, 0.8);
            top: 2rem;
            right: 0;
            z-index: 100;
    }
`;

const MobileMenu = () => {
    const [isClicked, setIsClicked] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setIsClicked(false));

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Wrapper ref={node}>
            <IconContext.Provider value={{ size: '2rem', title: 'Menu', style: { float: 'right', cursor: 'pointer' } }}>
                <div>
                    {isClicked ? <AiOutlineCloseCircle onClick={handleClick} /> : <AiOutlineMenuFold onClick={handleClick} />}
                </div>
            </IconContext.Provider>
            
            {isClicked && <Content><Menu /></Content>}
            
        </Wrapper>
    );
};

export default MobileMenu;
