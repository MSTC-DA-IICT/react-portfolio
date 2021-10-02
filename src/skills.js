function Skills(){
    return(
        <>
        {/* SKILLS SECTION */}
        <section className="skills" id="skills">
            <div className="container">
            <h2 className="title">My Skills</h2>
            <div className="skills-content">
                <div className="column left">
                <div className="text">My Creative Skills</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio placeat a officia nemo veniam officiis
                    repellat odit iusto, dicta facilis quaerat aliquam ut sunt impedit labore atque tempora harum maiores quidem
                    rem deserunt. Voluptatem, saepe rem. Facere, ullam nostrum sed, nihil et minima repellat vel eum
                    accusantium, in consequatur corporis. Accusamus laboriosam nostrum, consequuntur nulla odio id aut minima.
                </p>
                </div>
                <div className="column right">
                <div className="bars">
                    <div className="info">
                    <span>HTML</span>
                    <span>90%</span>
                    </div>
                    <div className="line html"></div>
                </div>
                <div className="bars">
                    <div className="info">
                    <span>CSS</span>
                    <span>70%</span>
                    </div>
                    <div className="line css"></div>
                </div>
                <div className="bars">
                    <div className="info">
                    <span>JavaScript</span>
                    <span>75%</span>
                    </div>
                    <div className="line js"></div>
                </div>
                <div className="bars">
                    <div className="info">
                    <span>React JS</span>
                    <span>60%</span>
                    </div>
                    <div className="line react"></div>
                </div>
                <div className="bars">
                    <div className="info">
                    <span>Node JS(Express)</span>
                    <span>80%</span>
                    </div>
                    <div className="line node"></div>
                </div>
                <div className="bars">
                    <div className="info">
                    <span>MongoDB(Mongoose)</span>
                    <span>80%</span>
                    </div>
                    <div className="line mongo"></div>
                </div>
                <div className="bars">
                    <div className="info">
                    <span>Firebase</span>
                    <span>60%</span>
                    </div>
                    <div className="line firebase"></div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <hr />
        </>
    );
}

export default Skills;