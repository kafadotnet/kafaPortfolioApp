import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useState } from "react";
import testimonials from "../../public/data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlide = testimonials[currentIndex];

  function handleNext() {
    if (currentIndex >= testimonials.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrevious() {
    if (currentIndex <= 0) {
      setCurrentIndex(testimonials.length - 1);
    } else {
      setCurrentIndex((oldIndex) => oldIndex - 1);
    }
  }

  return (
    <section className="testimonials-section" id="testimonials-section">
      <div className="section-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <h6 className="testimonials-subtitle">
          See what our clients say about us
        </h6>

        <div className="testimonials--wrapper">
          <SwitchTransition>
            <CSSTransition>
              <div className="testimonial--info">
                <div className="testimonial--desc">
                  <blockquote>{activeSlide.testimonialDesc}</blockquote>
                </div>
                <h4 className="testimonial--name">
                  {activeSlide.testimonialName}
                </h4>
                <p className="testimonial--title">
                  {activeSlide.testimonialTitle}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrevious}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrevious}
          >
            <i className="bi bi-arrow-left"></i>
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
