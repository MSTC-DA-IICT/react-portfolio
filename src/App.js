import './App.css';

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar" id="navbar">
        <div className="navmain container">
          <div className="logo"><span>#ME</span></div>
          <ul className="menu" id="toggle-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <hr></hr>


      {/* MAIN */}
      <section className="main" id="main">
        <div className="container">
          <div className="main-content">
            <h1 className="text-1">Hello, I am </h1>
            <h1 className="text-2">#ME</h1>
          </div>
        </div>
      </section>
      <hr></hr>


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


      {/* SERVICES SECTION */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="title">My Services</h2>
          <div className="services-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="card-title">Web Design / UI</div>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam provident enim
                  ullam quidem
                  expedita, suscipit sit accusantium? </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fa fa-database"></i>
                <div className="card-title">Backend with Server</div>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam provident enim
                  ullam quidem
                  expedita, suscipit sit accusantium? </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="far fa-file-code"></i>
                <div className="card-title">Complete Web App</div>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam provident enim
                  ullam quidem
                  expedita, suscipit sit accusantium? </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>


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


      {/* PROJECTS SECTION */}
      <section className="projects" id="projects">
        Projects Section
      </section>


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
                  <div className="sub-title">Dhiraj Narsinghani</div>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">India</div>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">
                    <a href="mailto:myemail@gmail.com">myemail@gmail.com</a>
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


      {/* FOOTER */}
      <footer>
        <span>
          Created By <a href="#">Developer</a> |
          Copyright &copy; <span id="year">2021</span> |
          All rights reserved
        </span>
      </footer>

    </>
  );
}

export default App;
