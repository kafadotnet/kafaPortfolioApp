import Footer from "../components/Footer";
import NavigationLayout from "../layouts/NavigationLayout";

const NotFoundPage = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout />
      </header>
      <section className="section-container page-not-found">
        <div className="message">
          404 - NotFoundPage
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;
