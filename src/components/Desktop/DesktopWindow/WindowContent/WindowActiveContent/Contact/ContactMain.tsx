import axios from 'axios';

import './ContactMain.scss';

import { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function ContactMain() {
    const { t } = useTranslation();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [contactLoading, setContactLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setContactLoading(true);

            await axios.post("https://portfolio2-0-api.onrender.com/contact", {
                name,
                email,
                message
            });

            alert(t("contact.success"));

            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error(error);
            alert(t("contact.error"));
        } finally {
            setContactLoading(false);
        }
    };

    return (
        <div className="contact-main-container">
            <div className="contact-main-text-container">
                <h4 className="contact-title">{t("contact.title")}</h4>
                <span className="contact-description">{t("contact.description")}</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-field">
                    <label htmlFor="contact-name">{t("contact.name")}</label>
                    <input id="contact-name" type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder={t("contact.namePlaceholder")} required />
                </div>

                <div className="contact-form-field">
                    <label htmlFor="contact-email">{t("contact.email")}</label>
                    <input id="contact-email" type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={t("contact.emailPlaceholder")} required />
                </div>

                <div className="contact-form-field">
                    <label htmlFor="contact-message">{t("contact.message")}</label>
                    <textarea id="contact-message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder={t("contact.messagePlaceholder")} rows={6} required />
                </div>

                <button className="btn-contact-form-submit" type="submit">{t("contact.send")}</button>
            </form>

            {contactLoading ? (
                <div className="contact-loader-container">
                    <img className="contact-loader" src="/icon/windowsContents/contact/dots-loading.gif" alt={t("contact.loadingAlt")} />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}