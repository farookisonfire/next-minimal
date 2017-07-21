import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'next/link';
import {unmountCanvas, mountCanvas} from '../../actions/landingActions';

class Navbar extends Component {
  render() {
    const offCanvas = this.props.pageName;
    return(
      <div className="navbar" style={{backgroundColor: offCanvas ? 'rgb(34,34,34)' : 'rgba(255,255,255,0)' }}>
        <div className="navbar-elements">
        <a href="/">
          <img className="nav-logo" src="https://s3.amazonaws.com/minimal-spaces/heart-400.png"/>
        </a>
        <ul className="nav-items">
          <li className="nav-item">
            <Link href="admissions" >
              <a className={offCanvas ? offCanvas === '/admissions' ? 'nav-link-dark active' : 'nav-link-dark' : 'nav-link'  }> Admissions </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="learn">
              <a className={offCanvas ? offCanvas === '/learn' ? 'nav-link-dark active' : 'nav-link-dark' : 'nav-link'}> Learn More </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="donate">
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
        <style jsx>{`
          .navbar {
            margin-top: 0;
            padding-top: 5px;
            position: absolute;
            top: 0;
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
          `}</style>
      </div>
    );
  }
}

Navbar.propTypes = {
  pageName: PropTypes.string
};

export default Navbar;
