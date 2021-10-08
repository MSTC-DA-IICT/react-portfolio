import "./css/Footer.css";
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
          <a
            href="https://www.facebook.com"
            className="facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square"></i>@Facebook Id
          </a>
          <a
            href="https://twitter.com"
            className="twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter-square"></i>@Twitter Id
          </a>
          <a
            href="https://www.linkedin.com"
            className="linkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>@LinkedIn Id
          </a>
          <a
            href="https://www.youtube.com"
            className="youtube"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube-square"></i>@Youtube Name
          </a>
          <a
            href="https://github.com"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>@Github Id
          </a>
        </div>
        <p className="copyrights"> Copyrights &copy; 2021 Hacktoberfest</p>
      </footer>
      <span>
        Template taken from{" "}
        <a href="https://github.com/MSTC-DA-IICT/react-portfolio">
          MSTC Github
        </a>
      </span>
    </>
  );
}

export default Footer;
