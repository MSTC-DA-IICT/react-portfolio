import avtar from '../image/logo1.png'
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
                    <img src={avtar} alt="avatar" height='150px' />
                    </div>
                    <div className="column right">
                    <div className="text">
                        I am #ME and I am a <span>Full Stack Web Developer</span>.
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas aperiam nisi, placeat quibusdam veritatis
                        mollitia minima repellendus architecto quam quisquam temporibus harum expedita maiores necessitatibus,
                        facere tempore eligendi unde soluta explicabo? Repellat quam dolores illo commodi harum at, excepturi
                        facilis delectus labore beatae eaque nostrum, nesciunt incidunt pariatur cum doloribus.</p>
                    <a href="#">Download CV</a>
                    </div>
                </div>
                </div>
            </section>
            <hr></hr>
        </>
    );
}

export default AboutMe;