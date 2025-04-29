import { Link } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div id="profile-section" className="profile-section">
      <div className="section-container container">
        <div className="profile-content row align-items-center">
          <div className="profile-description col-12 col-md-6">
            <p className="descr-1">Hi, my name is</p>
            <h3 className="descr-name">
              <span className="firstname">Fabrice</span>
              <span className="lastname">Karenzi</span>,
            </h3>
            <p className="descr-text">
              A <span className="profile-dev-typ">.NET Web Developer</span> with
              passion to build apps and create web experience.
            </p>
            <div className="profile-descr--buttons">
              <Link to="/contact-me" className="btn-get-in-touch">
                Get in Touch
              </Link>
              <a
                href="/data/fabrice-karenzi-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-resume"
              >
                Resume <i className="fa fa-download" aria-hidden="true"></i>
              </a>
            </div>

            <div className="profile-social--networks">
              <a
                className="social-icon"
                href="https://github.com/kafadotnet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a
                className="social-icon"
                href="https://linkedin.com/in/fabrice-karenzi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-img col-12 col-md-6 text-center">
            <div className="profile-img-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
