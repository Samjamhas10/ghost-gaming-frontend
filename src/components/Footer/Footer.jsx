import { FaFacebookF, FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__socials">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="footer__icons"
          aria-label="Facebook"
        >
          <FaFacebookF />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.discord.com"
          target="_blank"
          className="footer__icons"
          aria-label="Discord"
        >
          <FaDiscord />
          <span>Discord</span>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          className="footer__icons"
          aria-label="Youtube"
        >
          <FaYoutube />
          <span>Youtube</span>
        </a>
        <a
          href="https://www.twitch.com"
          target="_blank"
          className="footer__icons"
          aria-label="Twitch"
        >
          <FaTwitch />
          <span>Twitch</span>
        </a>
      </section>
      <p className="footer__copyright">
        @2025 Ghost Games. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
