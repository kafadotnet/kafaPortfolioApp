import { useState } from "react";

const ContactMeForm = () => {
  
    const [contactMeForm, setcontactMeForm] = useState({
        fullname: "",
        email: "",
        message: ""
      });
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
    
      const validateForm = (values) => {
        const errors = {};
        const regEx = /^(?!@)(?!.*\.\.)(?![.-])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        
        if(!values.fullname) {
          errors.fullname = "Please enter your fullname";
        }
        
        if(!values.email) {
          errors.email = "Please enter an email address";    
        }
        else if(!regEx.test(values.email)) {
          errors.email = "Please enter a valid email address (e.g. pseudonym@yh.nackademin.se)";
        }
    
        if(!values.message) {
          errors.message = "Please enter message";
        }
        else if(values.message.length < 10) {
          errors.message = "Your message should be not less than 10 characters.";
        }
    
        if(Object.keys(errors).length === 0) {
          setSubmitted(true)
        }
        else {
          setSubmitted(false)
        }
    
        return errors;
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(contactMeForm))
      }
    
      const handleChange = (e) => {
        const {id, value} = e.target;
        setcontactMeForm({...contactMeForm, [id]: value})
      }
    
  return (
    <section className="contact-me-form">
        <div className="container">
        {
          submitted ? 
          (
            <div className="message__container d-flex justify-content-center align-items-center">
            <div className="message__message">
              Thank you for your message!
            </div>
          </div>
          ) : 
          (
            <>
            <h3 className="contact__form--title">Got a project in mind, reach out!</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  value={contactMeForm.fullname}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                <div className="errorMessage">{errors.fullname}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={contactMeForm.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <div className="errorMessage">{errors.email}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Send us your message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="6"
                  value={contactMeForm.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                ></textarea>
                <div className="errorMessage">{errors.message}</div>
              </div>
              <div>
                <button className="btn__contactMeForm e-toast-success" type="submit">
                  Send message
                </button>
              </div>
            </form>
            </>
          )
        }
      </div>
    </section>
  )
}

export default ContactMeForm;