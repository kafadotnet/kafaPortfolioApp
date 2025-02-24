import CardPortfolio from "../components/CardPortfolio";

const PortfolioLayout = () => {
  return (
    <>
      <section
        className="portfolio-section bg-gradient-portfolio"
        id="portfolio-section"
      >
        <div className="section-container">
            <h2 className="portfolio-title">Portfolio</h2>

          <div className="d-flex justify-content-center">
            <CardPortfolio />
          </div> 
        </div>
      </section>
    </>
  );
};

export default PortfolioLayout;
