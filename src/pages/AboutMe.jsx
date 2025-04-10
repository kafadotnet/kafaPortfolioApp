import Footer from "../components/Footer";
import NavigationLayout from "../layouts/NavigationLayout";

const AboutMe = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout />
      </header>
      <div className="section-container container py-5 about-me-section" id="about-me-section">
  <div className="row align-items-center about-me-content">
    <div className="col-md-6 mb-4 mb-md-0 about-me-image">
      <img
        src="./images/kafa-aboutme.jpg"
        className="img-fluid rounded shadow"
        alt="Fabrice Karenzi's picture on about me section"
      />
    </div>

    <div className="col-md-6 about-me-text">
      <h4 className="fw-bold mb-3">
        Hello! I am Fabrice Karenzi, a <span className="text-title">.NET Web Developer.</span>
      </h4>
      <p className="text-muted">
        My passion is using the .NET framework, along with C#, ASP.NET Core, and front-end
        technologies like HTML, CSS, and JavaScript and related framework like React, to create
        seamless digital experiences. I’m a problem-solver at heart who enjoys transforming complex
        challenges into aesthetically functional and intuitive solutions. I am constantly learning
        and staying updated with the latest trends in web development, and I’m eager to contribute
        to innovative projects that make a real impact.
      </p>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};

export default AboutMe;
