
import master from './master'

function AboutMe(){
    return(
        <>
        {/* ABOUT ME SECTION */}
            <section className="about" id="about">
                <div className="container">
                <h2 className="title">
                    About Me
                </h2>
                <div className="about-content">
                    <div className="column left">
                    <img src="#" alt="avatar" />
                    </div>
                    <div className="column right">
                    <div className="text">
                        I am {master.firstname} {master.lastname} and I am a <span>{master.about.whoIam}</span>.
                    </div>
                    <p>{master.about.desc}</p>
                    <a href={master.about.resumelink}>Download CV</a>
                    </div>
                </div>
                </div>
            </section>
            <hr></hr>
        </>
    );
}

export default AboutMe;