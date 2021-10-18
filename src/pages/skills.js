import '../css/Skills.css'
import "../css/Loader.css"
import ImageLoader from '../components/ImageLoader';
import Skill_box from '../Skill_box'
import master from '../master'

function Skills() {
  const coding = process.env.PUBLIC_URL + '/images/coding.gif'
  const {hasLoaded} = ImageLoader(coding)
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
              <p className="skills-para">{master.creativeSkills_desc}</p>
              {!hasLoaded &&
                  <div class="gif">
                    <div class="loader"/>
                  </div>
                }
                {hasLoaded && <img className="gif" src={coding} alt="coding-gif" />}
              </div>

            </div>
            <div className="column-right">
                {/*
                    To enter a new skill , go to ./data/Skills.js and follow the 
                    comments there to make the addition.
                */}
              {master.skills.map((obj) => {
                return (
                    <Skill_box skillname={obj.skillname} perce={obj.perce}/>
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