import ContactMeForm from "../layouts/ContactMeForm";
import NavigationLayout from "../layouts/NavigationLayout";

const ContactPage = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout/>
      </header>
      <ContactMeForm />
    </>
  )
}

export default ContactPage;