import Stack from "../data/Skills";
import '../css/Skills.css'
import coding from '../image/coding.gif'



function Skills() {
  return (
    <>
      {/* SKILLS SECTION */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="title">My Skills</h2>
          <div className="skills-content">
            <div className="column left">
             
              <div className="text"><h3 className="red">My Creative Skills</h3></div>
              <div className="code-gif"> 
              <p className="skills-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                optio placeat a officia nemo veniam officiis repellat odit
                iusto, dicta facilis quaerat aliquam ut sunt impedit labore
                atque tempora harum maiores quidem rem deserunt. Voluptatem,
                
              </p><img className="gif" src={coding} alt="coding-gif" /></div>
             
            </div>
            <div className="column-right">
                {/* 
                    To enter a new skill , go to ./data/Skills.js and follow the 
                    comments there to make the addition.
                */}
              {Stack.map((item) => {
                return (
                  <div className="item">
                    <h6 className="technology">{item[2]}</h6>

                    {/* <span>{item[0]}</span> */}
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