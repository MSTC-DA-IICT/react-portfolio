import "../css/Contact.css";
import { ReactComponent as Mailbox } from "../image/mailbox.svg";

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-header-wrapper">
                    <p className="contact-header-main-text">Contact Me</p>
                    <p className="contact-header-sub-text">
                        Let's get in touch 🤝
                    </p>
                </div>
                <div className="contact-main-wrapper">
                    <div className="contact-left-wrapper">
                        <Mailbox className="mail-box" />
                    </div>
                    <form className="contact-right-wrapper">
                        <input
                            required
                            className="contact-input"
                            placeholder="John Doe"
                        />
                        <input
                            required
                            className="contact-input"
                            placeholder="abc@xyz.com"
                        />
                        <textarea
                            required
                            rows="30"
                            cols="40"
                            placeholder="Hey there! 👋"
                        ></textarea>
                        <div className="contact-right-btn-wrapper">
                            <button className="contact-right-btn">
                                Send Message
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
