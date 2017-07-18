import ContactHeader from './ContactHeader';
import Footer from '../footer/Footer';

const ContactPage = () => (
  <div>
    <div className="contact-top">
      <ContactHeader />
    </div>
    <Footer />
    <style jsx>{`
      .contact-top {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        margin-bottom: 50px;
      }
    `}</style>
  </div>
)

export default ContactPage;