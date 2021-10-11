import "./css/Footer.css";
import master from './master'

function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer>
        <p className="text">Sign Up to get updated.</p>
        <form>
          <input type="email" required></input>
          <input type="submit" value="Sign up"></input>
        </form>
        <ul className="footer-list">
          <li>
            <a href="!#" className="ltr-effect">
              Home
            </a>
          </li>
          <li>
            <a href="!#">About</a>
          </li>
          <li>
            <a href="!#">Services</a>
          </li>
          <li>
            <a href="!#">Skills</a>
          </li>
          <li>
            <a href="!#">Projects</a>
          </li>
          <li>
            <a href="!#">Contact</a>
          </li>
        </ul>
        <div className="social-media-container">
          <a href={master.social_links.facebook} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href={master.social_links.twitter} target="_blank" rel="noreferrer">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href={master.social_links.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={master.social_links.youtube} target="_blank" rel="noreferrer">
            <i className="fab fa-youtube-square"></i>
          </a>
          <a href={master.social_links.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
        <p className="copyrights"> Copyrights &copy; 2021 Hacktoberfest</p>
      </footer>
      <span>
        Template taken from {" "}
        <a href="https://github.com/MSTC-DA-IICT/react-portfolio">
           MSTC Github
        </a>
      </span>
    </>
  );
}

export default Footer;
