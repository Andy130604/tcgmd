import React from "react";
import "./Contact.css";

const Contact = () => {
    React.useEffect(() => {
        const trimForEmail = (value: String | null): String | null => {
            if (value) {
                return value.replaceAll(" ", "%20").replaceAll("\n", "%0d%0a");
            } else {
                return null;
            }
        };

        const updateMail = () => {
            const objectForm: HTMLInputElement | null =
                document.querySelector(".contact-object-form");
            const descriptionForm: HTMLInputElement | null = document.querySelector(
                ".contact-description-form",
            );
            const submitForm: HTMLLinkElement | null = document.querySelector(".submit-form");
            const object = objectForm ? trimForEmail(objectForm.value) : null;
            const description = descriptionForm ? trimForEmail(descriptionForm.value) : null;
            if (submitForm) {
                if (!object) {
                    if (!description) {
                        submitForm.href = "mailto:tcgmd@gmail.com";
                    } else {
                        submitForm.href = "mailto:tcgmd@gmail.com?body=" + description;
                    }
                } else {
                    if (description === "") {
                        submitForm.href = "mailto:tcgmd@gmail.com?subject=" + object;
                    } else {
                        submitForm.href =
                            "mailto:tcgmd@gmail.com?subject=" + object + "&body=" + description;
                    }
                }
            }
        };
        const objectForm: HTMLInputElement | null = document.querySelector(".contact-object-form");
        const descriptionForm: HTMLInputElement | null = document.querySelector(
            ".contact-description-form",
        );
        if (objectForm) {
            objectForm.addEventListener("keyup", () => {
                updateMail();
            });
        }
        if (descriptionForm) {
            descriptionForm.addEventListener("keyup", () => {
                updateMail();
            });
        }
    }, []);
    return (
        <div className="contact-container">
            <div className="contact-form">
                <div className="contact-object">
                    <h3 className="contact-object-label">Objet :</h3>
                    <input
                        type="text"
                        name="contact-object"
                        className="contact-object-form"
                        spellCheck="false"
                        placeholder="Entrez l'objet de votre requête"
                    />
                </div>
                <div className="contact-description">
                    <h3 className="contact-description-label">Message :</h3>
                    <textarea
                        name="contact-description"
                        className="contact-description-form"
                        spellCheck="false"
                        placeholder="Entrez votre message"
                    ></textarea>
                </div>
                <div className="contact-submit">
                    <a href="mailto:tcgmd@gmail.com" className="submit-form">
                        Envoyer
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
