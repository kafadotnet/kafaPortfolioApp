import AboutMe from "../layouts/AboutMe";
import Footer from "../layouts/Footer";
import NavigationLayout from "../layouts/NavigationLayout";
import Portfolio from "../layouts/PortfolioLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import Stacks from "../layouts/Stacks";
import Testimonials from "../layouts/Testimonials";

const HomePage = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout />
        <ProfileLayout />
      </header>
      <AboutMe />
      <Stacks />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
