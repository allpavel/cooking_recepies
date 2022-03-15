import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/SEO';

const Wrapper = styled.main`
    display: flex;
    flex: 1 0 auto;
`;

const TextContainer = styled.article`
    padding: 5rem 2rem 5rem 9rem;
    width: 50%;

    h3 {
        margin-top: 0;
    }
`;

const FormContainer = styled.article`
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 2rem 3rem;
    border-left: 5px solid var(--navbar-and-footer-color-main);
    max-width: 100%;

    h3 {
        margin-top: 0;
    }
`;

const Inputbox = styled.div`
    position: relative;
    height: 3rem;
    min-width: 250px;
    margin-bottom: 2rem;

    input {
        width: 80%;
        min-width: 200px;
        height: 100%;
        top: 0;
        left: 0;
        outline: none;
        background: none;
        border: 3px solid var(--navbar-and-footer-color-main);
        border-radius: 5px;
        padding: 0.5rem;
    }

    label {
        position: absolute;
        top: 14px;
        left: 20px;
        font-size: 1rem;
        padding: 0 3px;
        background: none;
        transition: all 0.6s ease-in;
    }

    input:hover,
    input:focus {
        border: 3px solid var(--navbar-and-footer-color-hover);
    }

    input:focus ~ label,
    input:valid ~ label {
        transform: translateX(-13px) translateY(-22px);
        font-size: 0.8rem;
        background-color: white;
    }

    textarea {
        outline: none;
        resize: none;
        width: 80%;
        min-width: 200px;
        padding: 0.5rem;
        border: 3px solid var(--navbar-and-footer-color-main);
    }

    textarea + label {
        position: absolute;
        font-size: 0.8rem;
        background: white;
        top: -6px;
        left: 10px;
    }

    textarea:focus,
    textarea:hover {
        border: 3px solid var(--navbar-and-footer-color-hover);
    }
`;

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitForm, setSubmitForm] = useState({});

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handeMessageChange = event => {
        setMessage(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitForm({
            name,
            email,
            message
        });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Layout>
            <Seo title={'Contact'} />
            <Wrapper>
                <TextContainer>
                    <h3>Want To Get In Touch</h3>
                    <p>
                        Likeness form. Stars to fruitful image, fruit doesn't blessed sixth air isn't to it he from meat
                        third over Make greater given, blessed. Light. Greater replenish rule, good. Itself be. Gathered
                        shall thing after whales.
                    </p>
                    <p>
                        Greater may tree above man them you fish days likeness good. Good forth, great him for replenish
                        fourth, moved earth. Meat gathering. Great there meat, meat every set. Dominion that grass days
                        creeping created green, fish under after darkness appear, herb were. Multiply fill don't you'll
                        seed divided one forth heaven open herb divided. Fowl saying dominion that all a. Were can't
                        unto. Heaven, seed. Won't a saw winged signs. That fruit morning them seed without subdue under
                        fly all fish, set to.
                    </p>
                    <p>
                        Replenish don't every third set. He saying forth fourth, from likeness shall. Brought i Forth
                        seas. Fourth their upon also, fowl. So male. Face lesser second beginning open, seas have night
                        that winged. Give hath bring lights him after god given without meat. Sixth midst of there man
                        firmament seas creepeth waters give earth can't very, set, him above subdue. Fly second cattle
                        can't unto very were. Make deep said god saw first he open from seed that us were. For she'd.
                    </p>
                </TextContainer>
                <FormContainer>
                    <h3>Contact Form</h3>
                    <form>
                        <Inputbox>
                            <input
                                id="name"
                                type="text"
                                autoComplete="off"
                                required
                                value={name}
                                onChange={handleNameChange}
                            />
                            <label htmlFor="name">Your Name</label>
                        </Inputbox>
                        <Inputbox>
                            <input
                                id="email"
                                type="text"
                                autoComplete="off"
                                required
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <label htmlFor="email">Your Email</label>
                        </Inputbox>
                        <Inputbox>
                            <textarea id="message" rows={3} value={message} onChange={handeMessageChange} />
                            <label htmlFor="message">Your Message</label>
                        </Inputbox>
                        <Button type={'submit'} title={'Submit'} onClick={handleSubmit} styles={'smallButton'} />
                    </form>
                </FormContainer>
            </Wrapper>
        </Layout>
    );
}
