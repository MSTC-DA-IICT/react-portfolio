import "../css/Projects.css";
import master from '../master'
import Project_box from "../Project_box";

function Projects(){
    return(
        <>
        {/* PROJECTS SECTION */}
            <section className="projects" id="projects">
                <h1>Projects</h1>
                <div className="projects-tiles">
                    {
                        master.project.map((obj)=>{
                            return (<Project_box imageUrl={obj.imageUrl} projectname={obj.projectname} techstack={obj.techstack} codelink={obj.codelink} livelink={obj.livelink}/>)
                        })
                    }

                </div>
            </section>
            <hr />
        </>
    );
}

export default Projects;