import { Divider } from 'semantic-ui-react';

const ContactHeader = () => (
  <div>
    <div className="contact-header">
      <h1>Contact</h1>
      <Divider />
    </div>
    <div className="contact-subheader">
      <h1>We'd love to hear from you.</h1>
      <p>We are proud to have a distributed, remote team, working from around the world to develop and lead our immersion experiences. For inquiries, please reach us at <strong>info@oneheartsource.org</strong>.</p>
      <p>One Heart Source <br/>
      1443 E. Washington Blvd <br/>
      #179 <br/>
      Pasadena, CA 91104 </p>
    </div>
    <style jsx>{`
    .contact-header h1 {
      font-weight: 300;
      font-size: 36px;
      margin-bottom: 20px;
    }

    .contact-subheader h1 {
      margin-top: 30px;
      font-weight: 300;
      font-size: 24px;
    }

    .contact-subheader p {
      color: rgba(34,34,34,.7);
      font-size: 16px;
      margin-bottom: 30px;
    }  
    `}</style>
  </div>
);

export default ContactHeader;
