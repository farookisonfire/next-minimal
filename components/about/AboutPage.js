import { Component } from 'react';
import AboutHeader from './AboutHeader';
import AboutCircles from './AboutCircles';
import AboutStatistics from './AboutStatistics';
import AboutMedia from './AboutMedia';
import Footer from '../footer/Footer';
import FAQ from './FAQ';

class AboutPage extends Component {
  render() {
    const {
      faqs = [],
    } = this.props;

    return (
      <div>
        <div className="about-top">
          <AboutHeader />
          <AboutCircles />
        </div>
        <div className="about-mid">
          <AboutStatistics />
        </div>
        <div className="faq-container">
          <FAQ
            faqs={faqs} />
        </div>
        <div className="about-bottom">
          <AboutMedia />
        </div>
        <Footer />
        <style jsx>{`
          .about-top {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
          }

          .about-mid {
            width: 100%;
            background-color: rgb(247,247,247);
          }

          .faq-container {
            margin: 48px auto;
            width: 85%;
          }

          .about-bottom {
            background-color: rgb(238, 238, 238);
          }
        `}</style>
      </div>
    );
  }
}

export default AboutPage;
