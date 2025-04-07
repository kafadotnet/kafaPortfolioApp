const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-dark bg-gradient-portfolio text-white py-4" id="footer-section">
      <div className=" container text-center">
        <div className="logo">
          <p className="logo-text mb-1">KafaTech</p>
        </div>
        <div className="copy-right">
          <p className="mb-0">&copy; {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
