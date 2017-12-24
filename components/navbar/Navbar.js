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
    const NavIconWhite = (
      <Icon
        size="big"
        name="content"
        inverted
        color="grey"
        onClick={this.handleMobileIconClick} />
    );

    const MobileNavOpen = (
      <div className="mobile-nav-open" style={mobileNavOpen}>
        <a href="/">
          <img alt="heart" className="nav-logo" style={mobileNavOpenLogo} src="https://s3.amazonaws.com/minimal-spaces/heart-with-words-horizontal-white-small_9_3_17.png" />
        </a>
        <div className="mobile-nav-close-icon" style={mobileNavCloseIcon}>
          {NavIconWhite}
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
              <a style={mobileNavLink} href="https://oneheartsource.typeform.com/to/tU0wcN?refcode=webhome">Apply Now</a>
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
    const { pageName = '' } = this.props;

    let navbarClassName;
    if (pageName === '/') {
      navbarClassName = 'navbar';
    } else if (pageName === '/la-clippers') {
      navbarClassName = 'navbar-transparent';
    } else {
      navbarClassName = 'navbar-dark';
    }

    return (
      <div className={navbarClassName}>
        <div className="navbar-elements">
          <a href="/">
            <img alt="heart" className="nav-logo" src="https://s3.amazonaws.com/minimal-spaces/single-heart-icon_9_3_17.png" />
          </a>
          <ul className="nav-items">
            <li className="nav-item">
              <Link href="/admissions" >
                <a className={pageName === '/admissions' ? 'nav-link-dark active' : 'nav-link-dark'}> Admissions </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/learn">
                <a className={pageName === '/learn' ? 'nav-link-dark active' : 'nav-link-dark'}> Learn More </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/donate">
                <a className={pageName === '/donate' ? 'nav-link-dark active' : 'nav-link-dark'}> Donate </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-apply">
            <li>
              <a href="https://oneheartsource.typeform.com/to/tU0wcN?refcode=webhome" className="navbar-apply-now">Apply Now</a>
            </li>
          </ul>
        </div>
        <div className="navbar-mobile">
          <a href="/">
            <img alt="heart" className="nav-logo-mobile" src="https://s3.amazonaws.com/minimal-spaces/heart-with-words-horizontal-white-small_9_3_17.png" />
          </a>
          <div className="mobile-nav-icon">
            { NavIconWhite }
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
            background-color: rgba(31,30,29,.5);
            margin-top: 0;
            position: absolute;
            padding-top: 5px;
            width: 100%;
            top: 0;
          }

          .navbar-dark {
            background-color: rgb(31,30,29);
            margin-top: 0;
            position: absolute;
            padding-top: 5px;
            width: 100%;
            top: 0;
          }

          .navbar-transparent {
            background-color: rgba(31,30,29,0);
            margin-top: 0;
            position: absolute;
            padding-top: 5px;
            width: 100%;
            top: 0;
          }

          .navbar-elements {
            margin-left: auto;
            margin-right: auto;
            width: 90%;
          }

          .nav-logo {
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

            .nav-logo-mobile {
              margin-left: 15px;
              width: 150px;
            }

            .mobile-nav-icon {
              position: absolute;
              right: 15px;
              top: 10.5px;
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
