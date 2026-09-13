import axios from 'axios';
import './ContactMain.scss';

import { useState } from 'react';

export default function ContactMain() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [contactLoading, setContactLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            setContactLoading(true);
            await axios.post("https://portfolio2-0-api.onrender.com/contact", {
                name,
                email,
                message
            });
            setContactLoading(false);
            alert("Mensagem enviada com sucesso!");
        } catch(error){
            alert(error);
        } finally{
            setContactLoading(false);
        }
    };

    return (
        <div className="contact-main-container">

            <div className='contact-main-text-container'>
                <h4 className='contact-title'>Entre em Contato</h4>
                <span className='contact-description'>Preencha o formulário abaixo para enviar uma mensagem diretamente para o meu e-mail.</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-field">
                    <label htmlFor="contact-name">Nome</label>
                    <input id="contact-name" type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Digite seu nome" required />
                </div>

                <div className="contact-form-field">
                    <label htmlFor="contact-email">E-mail</label>
                    <input id="contact-email" type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Digite seu e-mail" required />
                </div>

                <div className="contact-form-field">
                    <label htmlFor="contact-message">Mensagem</label>
                    <textarea id="contact-message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Digite sua mensagem" rows={6} required />
                </div>

                <button className="btn-contact-form-submit" type="submit">Enviar mensagem</button>
            </form>

            {contactLoading ?
                <div className='contact-loader-container'>
                    <img className='contact-loader' src="/icon/windowsContents/contact/dots-loading.gif" alt='Animação de carregamento de envio de formulário' />
                </div>
            :
                <></>
            }

        </div>
    );
}