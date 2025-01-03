import React from 'react';
import Header from '../components/Header';
import './SenateInvolved.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faSitemap,
  faGavel,
  faExclamationTriangle,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const SenateInvolved = () => {
  return (
    <>
      <Header />
      <div className="senate-container">
        <h1 className="senate-title">
          Get involved with the Senate
        </h1>
        <p className="senate-description">
          Senate, the upper House of Parliament, offers a set of new initiatives and gets you a chance to get involved with what is happening at Senate.
          The House of Federation is in your access now, whether you want to know about it or there is something which the Senate has to get knowledge about.
          This House of the Parliament is now working with giving maximum information about itself to the public and giving them maximum opportunity to get to know it. At the same time it is aspiring to get maximum information about people's problems and the issues they want to be raised here in the House of Senate.
        </p>
      </div>
      <div className="footer-bottom">
                <p>
                    <a href="/glossary"><FontAwesomeIcon icon={faBook} /> Glossary</a> |
                    <a href="/sitemap"><FontAwesomeIcon icon={faSitemap} /> Site Map</a> |
                    <a href="/terms"><FontAwesomeIcon icon={faGavel} /> Terms of Use</a> |
                    <a href="/disclaimer"><FontAwesomeIcon icon={faExclamationTriangle} /> Disclaimer</a> |
                    <a href="/privacy"><FontAwesomeIcon icon={faUserShield} /> Privacy Policy</a>
                    <br />
                    <br />
                    Copyright © 2019-2024. All Rights Reserved. Senate of Pakistan.
                </p>
            </div>
    </>
  );
};

export default SenateInvolved;
