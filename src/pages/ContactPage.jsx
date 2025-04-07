import ContactMeForm from "../layouts/ContactMeForm";
import Footer from "../layouts/Footer";
import GoogleMap from "../layouts/GoogleMap";
import NavigationLayout from "../layouts/NavigationLayout";


const ContactPage = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout/>
      </header>
      <ContactMeForm />
      <GoogleMap />
      <Footer />
    </>
  )
}

export default ContactPage;