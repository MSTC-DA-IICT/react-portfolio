import master from './master'
import Skill_box from './Skill_box';

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
                <p>{master.creativeSkills_desc}</p>
                </div>
                <div className="column right">
                    {master.skills.map((obj)=>{
                        return (<Skill_box skillname={obj.skillname} perce={obj.perce}/>)
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