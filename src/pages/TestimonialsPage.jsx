import Footer from "../components/Footer";
import NavigationLayout from "../layouts/NavigationLayout";
import Testimonials from "../layouts/Testimonials";

const TestimonialsPage = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout />
      </header>
      <Testimonials />
      <Footer />
    </>
  );
};

export default TestimonialsPage;
