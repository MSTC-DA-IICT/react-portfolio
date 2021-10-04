import Stack from "./data/Skills";

function Skills() {
  return (
    <>
      {/* SKILLS SECTION */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="title">My Skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My Creative Skills</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                optio placeat a officia nemo veniam officiis repellat odit
                iusto, dicta facilis quaerat aliquam ut sunt impedit labore
                atque tempora harum maiores quidem rem deserunt. Voluptatem,
                saepe rem. Facere, ullam nostrum sed, nihil et minima repellat
                vel eum accusantium, in consequatur corporis. Accusamus
                laboriosam nostrum, consequuntur nulla odio id aut minima.
              </p>
            </div>
            <div className="column-right">
                {/* 
                    To enter a new skill , go to ./static/Skills.js and follow the 
                    comments there to make the addition.
                */}
              {Stack.map((item) => {
                return (
                  <div className="item">
                    <span>{item[0]}</span>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: item[1] }}
                        ></div>
                      </div>
                      <div>{item[1]}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Skills;