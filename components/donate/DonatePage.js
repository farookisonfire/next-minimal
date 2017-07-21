import React from 'react';
import DonateHeader from './DonateHeader';
import Footer from '../footer/Footer';
import DonateForm from './DonateForm';
import StripeJS from './StripeJS';

const DonatePage = () => (
  <div>
    <div className="donate-top">
      <DonateHeader />
    </div>
    <div className="donate-form-container">
      <StripeJS />
    </div>
    <Footer />
    <style jsx>{`
      .donate-top {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        margin-bottom: 50px;
      }

      .donate-form-container {
        background-color: rgb(238,238,238)
        width: 100%;
        padding: 40px;

      }
    `}</style>
  </div>
)

export default DonatePage;