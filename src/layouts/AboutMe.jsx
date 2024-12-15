import AboutMeImg from '../assets/images/kafa-aboutme.jpg';

const AboutMe = () => {
  return (
    <div className="about-me-secion" id="about-me-section">
        <div className="section-container">
            <h1 className="title">About me</h1>
            <div className="about-me-content">
                <div className="box image-left">
                    <img src={ AboutMeImg } className='image' alt="Fabrice Karenzi's picture on about me section" />
                </div>
                <div className="box text-right">
                    <div className="text-title">Hello! I am Fabrice Karenzi, a <span>.NET Web Developer. </span></div>
                    <p className="paragraph">My passion is using the .NET framework, along with C#, ASP.NET Core, 
                        and front-end technologies like HTML, CSS, and JavaScript and related framework like React, 
                        to create seamless digital experiences.
                        I’m a problem-solver at heart who enjoy transforming complex challenges into functional 
                        and intuitive solutions. I am constantly learning and staying updated with the latest 
                        trends in web development, and I’m eager to contribute to innovative projects that make 
                        a real impact.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe;