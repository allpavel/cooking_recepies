import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';

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

    const handeMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitForm({
            name,
            email,
            message
        });
        setName('');
        setEmail('')
        setMessage('');
    };

    return (
        <Layout>
            <main className="page_wrapper">
                <section className="contact-page">
                    <article className="text-container">
                        <h3>Want To Get In Touch</h3>
                        <p>
                            Likeness form. Stars to fruitful image, fruit
                            doesn't blessed sixth air isn't to it he from meat
                            third over Make greater given, blessed. Light.
                            Greater replenish rule, good. Itself be. Gathered
                            shall thing after whales.
                        </p>
                        <p>
                            Greater may tree above man them you fish days
                            likeness good. Good forth, great him for replenish
                            fourth, moved earth. Meat gathering. Great there
                            meat, meat every set. Dominion that grass days
                            creeping created green, fish under after darkness
                            appear, herb were. Multiply fill don't you'll seed
                            divided one forth heaven open herb divided. Fowl
                            saying dominion that all a. Were can't unto. Heaven,
                            seed. Won't a saw winged signs. That fruit morning
                            them seed without subdue under fly all fish, set to.
                        </p>
                        <p>
                            Replenish don't every third set. He saying forth
                            fourth, from likeness shall. Brought i Forth seas.
                            Fourth their upon also, fowl. So male. Face lesser
                            second beginning open, seas have night that winged.
                            Give hath bring lights him after god given without
                            meat. Sixth midst of there man firmament seas
                            creepeth waters give earth can't very, set, him
                            above subdue. Fly second cattle can't unto very
                            were. Make deep said god saw first he open from seed
                            that us were. For she'd.
                        </p>
                    </article>
                    <article className="form-container">
                        <h3>Contact Form</h3>
                        <form>
                            <div className="inputbox">
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete='off'
                                    required
                                    value={name}
                                    onChange={handleNameChange}
                                />
                                <label htmlFor="name">Your Name</label>
                            </div>
                            <div className="inputbox">
                                <input
                                    id='email'
                                    type="text"
                                    autoComplete='off'
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <label htmlFor="email">Your Email</label>
                            </div>
                            <div className="inputbox">
                                <textarea id="message" rows={3} value={message} onChange={handeMessageChange} />
                                <label htmlFor="message">Your Message</label>
                            </div>
                            <Button type={'submit'} title={'Submit'} onClick={handleSubmit} />
                        </form>
                    </article>
                </section>
            </main>
        </Layout>
    );
}
