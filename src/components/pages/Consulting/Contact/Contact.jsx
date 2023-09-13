import { useState } from 'react';
import { css } from '@emotion/react';
import IconMessage from '../../../../assets/icons/message-success.svg';
import { ClipLoader } from 'react-spinners';

const Contact = () => {
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messageSuccessfully, setMessageSuccessfully] = useState(false);
    const [messageError, setMessageError] = useState(false);


    const onSubmitMessage = (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const company = document.getElementById('company');
        if (name.value && email.value && phone.value && company.value && messageInput.value) {
            setLoading(true); //Ativação da Animação Loading
            setMessage(true);
            fetch('https://rich-jade-leopard-shoe.cyclic.app/sendemail', {
                // fetch('#', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    phone: phone.value,
                    company: company.value,
                    message: messageInput.value
                })
            }).then(response => {
                setTimeout(() => {
                    name.value = '';
                    email.value = '';
                    phone.value = '';
                    messageInput.value = '';
                    company.value = ''
                    setLoading(false);
                    setMessage(false);
                }, 1500);

                setTimeout(() => {
                    setMessage(false);
                }, 5000);

                setMessageSuccessfully(true);

                setTimeout(() => {
                    setMessageSuccessfully(false);
                }, 4000);
            })
                .catch(error => {
                    console.log('Errou mano', error);
                    setLoading(false);
                    setMessage(false);
                });
        } else {
            setMessageError(true);
            setTimeout(() => {
                setMessageError(false);
            }, 3500)
        }
    };

    const customClipLoaderStyles = css`display: flex; align-items: center; justify-content: center;`;
    const isMobile = window.innerWidth < 1024;

    return (
        <>
            {
                messageSuccessfully &&
                <div className='form_contact-message'>
                    <div className='contents'>
                        <div>
                            <img src={IconMessage} alt="Icon Message success" />
                        </div>
                        <div>
                            <h2 className='form_contact-message-title'>Success</h2>
                            <p className='form_contact-messge-description'>Your email was sent</p>
                        </div>
                    </div>
                    <div className='progress'>
                        <div className='progress-message'></div>
                    </div>
                </div>
            }
            {
                messageError && (
                    <div className='form_contact-message-error'>
                        <div className='contents-error'>
                            <div>
                                <img src={IconMessage} alt="Icon Message success" />
                            </div>
                            <div>
                                <h2 className='form_contact-message-title-error'>Error</h2>
                                <p className='form_contact-messge-description-error'>Please ensure all fields are correctly filled.</p>
                            </div>
                        </div>
                        <div className='progress-error'>
                            <div className='progress-message-error'></div>
                        </div>
                    </div>
                )}

            <section className="contact">
                <div className="contact__main-title">
                    <h3 className="contact__title">Contact Us</h3>
                    {isMobile ?
                        <p className="contact__description">Use the form below to contact us. We look forward to learning more about you, your organization, and how we can help you achieve even greater success.</p>
                        :
                        <p className="contact__description">Use the form below to contact us. We look forward to learning more about you, your <br /> organization, and how we can help you achieve even greater success.</p>
                    }
                </div>
                <form className="contact__form" onSubmit={onSubmitMessage}>
                    <div className="contact__form-control">
                        <label htmlFor="">Nome*</label>
                        <input type="text" id="name" name="name" placeholder="First name" />
                    </div>
                    <div className="contact__form-control">
                        <label htmlFor="">E-mail*</label>
                        <input type="email" id="email" name="email" placeholder="Insert your e-mail" />
                    </div>
                    <div className="contact__form-control">
                        <label htmlFor="">Phone*</label>
                        <input type="tel" name="phone" id="phone" placeholder="+1 (000) 000-0000" />
                    </div>
                    <div className="contact__form-control">
                        <label htmlFor="">Company*</label>
                        <input type="text" name="company" id="company" placeholder="Insert your company name" />
                    </div>
                    <div className="contact__form-control">
                        <label htmlFor="">Project Details</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={loading} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {loading ? (
                                <ClipLoader
                                    css={customClipLoaderStyles}
                                    size={12.5}
                                    color={'#ffffff'}
                                    loading={loading}
                                />
                            ) : (' Send Request ')}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Contact;
