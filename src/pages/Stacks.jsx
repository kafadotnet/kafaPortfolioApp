import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import NavigationLayout from "../layouts/NavigationLayout";

const Stacks = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout />
      </header>
      <section id="stacks-section" className="py-5 bg-light stacks-section">
        <div className="section-container container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 left">
              <h5>
                Hello! I am Fabrice Karenzi, a <span className="text-title">.NET Web Developer.</span>
              </h5>
              <p>
                I have so far worked with a variety of web technologies and still acquiring a great number 
                of skills which explains the versatility and highlights both my frontend and backend 
                expertise, while I try to stay updated with modern web development tools.
              </p>
              <a href="#" className="btn-read-more">Read more</a>
            </div>
            <div className="col-md-6 technologies-container">
              <Technologies />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Stacks;
