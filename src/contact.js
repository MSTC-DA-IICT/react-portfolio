import "./css/Contact.css";
import master from './master.json'
function Contact(){
    return(
        <>
        {/* CONTACT SECTION */}
            <section className="contact" id="contact">
                <div className="container"></div>
                <h2 className="title">
                Contact Me
                </h2>
                <div className="contact-content">
                <div className="column left">

                    <div className="table">
                    <div className="row">
                        <div className="info">
                        <div className="head">Name</div>
                        <div className="sub-title">{master.firstname}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="info">
                        <div className="head">Address</div>
                        <div className="sub-title">{master.address}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="info">
                        <div className="head">Email</div>
                        <div className="sub-title">
                            <a href="mailto:myemail@gmail.com">{master.email}</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="column right">
                    <h2 className="text">Send Me a Message</h2>
                    <form action="#" method="POST">
                    <div className="fields">
                        <div className="field name">
                        <input type="text" id="name" name="name" placeholder="Name" />
                        </div>
                        <div className="field email">
                        <input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="field subject">
                        <input type="name" id="subject" name="subject" placeholder="Subject" />
                    </div>
                    <div className="field msg">
                        <textarea id="msg" name="msg" placeholder="Message" cols="30" rows="10"></textarea>
                    </div>
                    <div className="button">
                        <button type="submit">Send Message</button>
                    </div>
                    </form>
                </div>
                </div>
            </section>
            <hr />
        </>
    );
}

export default Contact;