import CardPortfolio from "../components/CardPortfolio";
import Footer from "../components/Footer";
import NavigationLayout from "../layouts/NavigationLayout";

const PortfolioLayout = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout />
      </header>
      <section className="portfolio-section" id="portfolio-section">
        <div className="section-container">
          <CardPortfolio />
        </div>
    </section>
      <Footer />
    </>
  );
};

export default PortfolioLayout;
