import { FaFacebookF, FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__socials">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icons"
          aria-label="Visit Ghost Games on Youtube"
        >
          <FaYoutube />
          <span>Youtube</span>
        </a>
        <a
          href="https://www.twitch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icons"
          aria-label="Visit Ghost Games on Twitch"
        >
          <FaTwitch />
          <span>Twitch</span>
        </a>
      </section>
      <small className="footer__copyright">
        @{new Date().getFullYear()} Ghost Games. All rights reserved.
      </small>
    </footer>
  );
}

export default Footer;
