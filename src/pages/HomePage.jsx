import Footer from "../components/Footer";
import NavigationLayout from "../layouts/NavigationLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import Testimonials from "../layouts/Testimonials";

const HomePage = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout />
        <ProfileLayout />
      </header>
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
