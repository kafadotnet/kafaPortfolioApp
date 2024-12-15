
const ProfileLayout = () => {
  return (
    <div id="profile-section" className="profile-section">
        <div className="section-container">
            <div className="profile-content">
                <div className="profile-description">
                    <div className="descr-1">Hi, my name is</div>
                        <h1 className="descr-2"><span className="first-name">Fabrice</span><span className="lastname">Karenzi</span>,</h1>
                        <p className="descr-text"> A <span className="profile-dev-typ">.NET Web Developer</span> with passion to build apps and create web experience.</p>
                    <div className="profile-descr--buttons">
                        <button className="btn bnt-primary">Get in Touch</button>
                        <button className="btn bnt-primary">Resume <i className="fa fa-download" aria-hidden="true"></i></button>
                    </div>

                    <div className="profile-social--networks">
                    <a href="https://github.com/kafadotnet" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/fabrice-karenzi" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    </div>

                </div>

                <div className="profile-img">

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileLayout;