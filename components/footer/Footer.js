import {Icon} from 'semantic-ui-react';
import Link from 'next/link';


const Footer = () => (
  <div className="footer"> 
    <div className="footer-margin">
    <img src="https://s3.amazonaws.com/minimal-spaces/heart-400.png"/>
    <div>
      <ul className="footer-links-list">
        <li className="footer-link-list-item" >
          <Link href="/contact">
            <a className="footer-link" >Contact</a>
          </Link>
        </li>
        <li className="footer-link-list-item">|</li>
        <li className="footer-link-list-item" >
          <Link href="/donate">
            <a className="footer-link" >Donate</a>
          </Link>
        </li>
      </ul>
    </div>
    <div className="footer-social-media">
      <div style={{display: 'block'}}>
        <a href="https://www.facebook.com/oneheartsource/"><Icon name='facebook square' size='big' inverted color="black"/></a>
        <a href="https://www.instagram.com/oneheartsource/"><Icon name='instagram' size='big' inverted color="black"/></a>
        <a href="https://twitter.com/oneheartsource?lang=en"><Icon name='twitter square' size='big' inverted color="black"/></a>
      </div>
    </div>
    <span>One Heart Source © 2017</span>
    </div>
    <style jsx>{`
      .footer {
        font-weight: 300;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        position: relative;
        border-top: 1px solid rgb(220,220,220);
        }
      
      .footer-margin {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
      }

      .footer img {
        width: 45px;
        position: absolute; 
        left: 0;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 7%;
        }
      
      .footer-links-list {
        list-style: none;
        padding: 0;
      }

      .footer-link-list-item {
        color: black;
        display: inline-block;
        padding-left: 2.5px;
        padding-right: 2.5px;
      }
      
      .footer-link {
        color: black;
      }

      .footer-social-media {
        margin-bottom: 5px;  
      }
      
    `}</style>
  </div>
);

export default Footer;