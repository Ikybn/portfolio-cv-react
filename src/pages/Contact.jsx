import React from "react";
import ContactForm from "../components/ContactForm";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";

const Contact = () => {

    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>91 bld du maréchal Foch</p>
                            <p>95210 Saint-Gratien</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0676692493" className="hover">
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() => alert("Téléphone copié !")}
                                >
                                    06 76 69 24 93
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="ikr.projet@gmail.com" className="hover">
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() => alert("Email copié !")}
                                >
                                    ikr.projet@gmail.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Ikrame Nguyen - 2023</p>
                    </div>
                </div>
                <Buttons left={"/projet-3"} />
            </div>
        </main>
    );
};


export default Contact;