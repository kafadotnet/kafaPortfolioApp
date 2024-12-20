import MsFoureCommerce from '../assets/images/msfour-eCommerce.jpg'
 
const Portfolio = () => {
  return (
    <section className="portfolio-section bg-gradient-portfolio" id="portfolio">
        <div className="section-container">
          
          <div className="d-flex justify-content-center">
              <h2 className="portfolio-title">Portfolio</h2>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col">
              <div className="card">
                <img src={ MsFoureCommerce } alt="A Python e-commerce app image" />

                <div className="card-logo">
                  <a href="https://github.com/kafabkaren/msfour_kafagymstore" target='_blank' rel='noopener noreferrer'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />          
                  </a>
                </div>

                <div className="card-body">
                  <h5 className="card-title">E-commerce Gym App</h5>
                </div>

                <div className="card-bg"></div>

              </div>
            </div>
          </div>

          </div>
    </section>
  )
}

export default Portfolio;