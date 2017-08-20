import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';
import Transition from 'react-transition-group/Transition';
import {
  mobileNavOpen,
  defaultStyle,
  transitionStyles,
  mobileNavCloseIcon,
  mobileNavOpenLogo,
  mobileNavLinks,
  mobileNavLink,
  mobileNavLinkLittle,
  mobileNavLinkContainer,
  mobileNavLinkLittleContainer,
} from './navStyles';

const duration = 300;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileNav: false,
    };

    this.handleMobileIconClick = this.handleMobileIconClick.bind(this);
  }

  handleMobileIconClick() {
    const newState = {
      showMobileNav: !this.state.showMobileNav,
    };
    this.setState(newState);
  }

  render() {
    const offCanvas = this.props.pageName;

    const MobileNavOpen = (
      <div className="mobile-nav-open" style={mobileNavOpen}>
        <a href="/">
          <img alt="heart" className="mobile-nav-logo" style={mobileNavOpenLogo} src="https://s3.amazonaws.com/minimal-spaces/heart-400.png" />
        </a>
        <div className="mobile-nav-close-icon" style={mobileNavCloseIcon}>
          <Icon
            size="big"
            name="content"
            inverted
            color="grey"
            onClick={this.handleMobileIconClick} />
        </div>
        <div className="mobile-nav-content">
          <ul style={mobileNavLinks}>
            <li style={mobileNavLinkContainer}>
              <Link href="/admissions"><a style={mobileNavLink}>Admissions</a></Link>
            </li>
            <li style={mobileNavLinkContainer}>
              <Link href="/learn"><a style={mobileNavLink}>Learn More</a></Link>
            </li>
            <li style={mobileNavLinkContainer}>
              <Link href="/donate"><a style={mobileNavLink}>Donate</a></Link>
            </li>
            <li style={mobileNavLinkContainer}>
              <a style={mobileNavLink} href="https://oneheartsource.typeform.com/to/OOuoFa?refcode=webadmissions">Apply Now</a>
            </li>
            <li style={mobileNavLinkContainer}>
              <Link href="/contact"><a style={mobileNavLink}>Contact</a></Link>
            </li>
            <li style={mobileNavLinkLittleContainer}>
              <a style={mobileNavLinkLittle} href="https://www.facebook.com/oneheartsource/">Facebook</a>
            </li>
            <li style={mobileNavLinkLittleContainer}>
              <a style={mobileNavLinkLittle} href="https://www.instagram.com/oneheartsource/">Instagram</a>
            </li>
            <li style={mobileNavLinkLittleContainer}>
              <a style={mobileNavLinkLittle} href="https://twitter.com/oneheartsource?lang=en">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    );

    const MobileNav = MobileNavOpen;

    return (
      <div className="navbar" style={{ backgroundColor: offCanvas ? 'rgb(34,34,34)' : 'rgba(255,255,255,0)' }}>
        <div className="navbar-elements">
          <a href="/">
            <img alt="heart" className="nav-logo" src="https://s3.amazonaws.com/minimal-spaces/heart-400.png" />
          </a>
          <ul className="nav-items">
            <li className="nav-item">
              <Link href="/admissions" >
                <a className={offCanvas ? offCanvas === '/admissions' ? 'nav-link-dark active' : 'nav-link-dark' : 'nav-link'}> Admissions </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/learn">
                <a className={offCanvas ? offCanvas === '/learn' ? 'nav-link-dark active' : 'nav-link-dark' : 'nav-link'}> Learn More </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/donate">
                <a className={offCanvas ? offCanvas === '/donate' ? 'nav-link-dark active' : 'nav-link-dark' : 'nav-link'}> Donate </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-apply">
            <li>
              <a href="https://oneheartsource.typeform.com/to/OOuoFa?refcode=webadmissions" className="navbar-apply-now">Apply Now</a>
            </li>
          </ul>
        </div>
        <div className="navbar-mobile">
          <a href="/">
            <img alt="heart" className="nav-logo" src="https://s3.amazonaws.com/minimal-spaces/heart-400.png" />
          </a>
          <div className="mobile-nav-icon">
            <Icon
              size="big"
              name="content"
              onClick={this.handleMobileIconClick} />
          </div>
          <Transition in={this.state.showMobileNav} timeout={duration}>
            {state => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}>
                {MobileNav}
              </div>
            )}
          </Transition>
        </div>
        <style jsx>{`
          .navbar {
            margin-top: 0;
            position: absolute;
            padding-top: 5px;
            width: 100%;
          }

          .navbar-elements {
            margin-left: auto;
            margin-right: auto;
            width: 90%;
          }

          .nav-logo {
            margin-left: 15px;
            width: 50px;
          }

          .nav-items {
            list-style: none;
            display: inline-block;
            margin: 0;
            transform: translateY(-100%);
          }

          .nav-link {
            border-radius: 4px;
            padding: 20px;
            text-decoration: none;
            transition-property: background-color, color;
            transition-duration: 1s, 1s;
            color: black;
          }

          .nav-link:visited {
            color:black;
          }

          .nav-link:hover {
            background-color: rgba(50,50,50,.6);
            border: 1px solid #FB605B;
            border-radius: 4px;
            color: white;
          }

          .nav-item {
            display: inline-block;
          }

          .nav-link-dark {
            border-radius: 4px;
            color: white;
            padding: 20px;
            text-decoration: none;
          }

          .nav-link-dark:visited {
            color:white;
          }

          .nav-link-dark:hover {
            border-radius: 4px;
            color: white;
          }
          .active {
            border-bottom: 2px solid red;
          }
          .navbar-apply {
            display: inline-block;
            list-style: none;
            transform: translateY(-100%);
            position: absolute;
            top: 26px;
            right: 5%;
          }
          .navbar-apply-now {
            transition: 1s;
            padding: 15px 20px;
            color: white;
            cursor: pointer;
            background: rgb(250,95,91);
            background: -webkit-linear-gradient(left top, rgb(250,95,91), rgba(250,95,91,.7)); /* For Safari 5.1 to 6.0 */
            background: -o-linear-gradient(bottom right, rgb(250,95,91), rgba(250,95,91,.7))); /* For Opera 11.1 to 12.0 */
            background: -moz-linear-gradient(bottom right, rgb(250,95,91), rgba(250,95,91,.7))); /* For Firefox 3.6 to 15 */
            background: linear-gradient(to bottom right, rgb(250,95,91), rgba(250,95,91,.7))); /* Standard syntax */
          }

          .navbar-mobile {
            display: none;
          }

          @media (max-width: 768px) {
            .navbar-elements {
              display: none;
            }

            .navbar-mobile {
              display: flex;
            }
            
            .navbar-logo {
              flex-grow: 1;
            }

            .mobile-nav-icon {
              position: absolute;
              right: 15px;
              top: 10px;
              cursor: pointer;
            }

            .mobile-nav-open {
              background-color: black;
              height: 100vh;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 1;
            }

            .mobile-nav-close-icon {
              position: absolute;
              right: 15px;
              top: 15px;
              cursor: pointer;
              z-index: 2;
            }
          }
          `}</style>
      </div>
    );
  }
}

Navbar.propTypes = {
  pageName: PropTypes.string,
};

export default Navbar;
