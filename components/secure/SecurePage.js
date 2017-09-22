import SecureHeader from './SecureHeader';
import Checkout from './Checkout';
import Footer from '../footer/Footer';

const SecurePage = (props) => {
  const {
    id,
    name,
  } = props;

  return (
    <div>
      <div className="secure-background">
        <div className="secure-overlay">
          <div className="secure-top">
            <SecureHeader id={id} name={name} />
          </div>
        </div>
      </div>
      <div className="secure-payment-container">
        <Checkout />
      </div>
      <Footer />
      <style jsx>{`
        .secure-background {
          margin-top: 55px;
          background-image: url(https://s3.amazonaws.com/minimal-spaces/team-pic.jpg);
          background-size: cover;
          background-position: center;
          height: 700px;
        }

        .secure-overlay {
          background-color: rgba(200,200,200,.2);
          width: 100%;
          height: 100%;
        }

        .secure-top {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 50px;
          padding-top: 24px;
        }

        .secure-payment-container {
          width: 100%;
          padding: 40px;
          text-align: center;
        }

        .secure-payment-container span {
          display: none; !important
        }
      `}</style>
    </div>
  );
};

export default SecurePage;
