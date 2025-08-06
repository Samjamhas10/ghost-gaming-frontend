import { FaFacebookF, FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <section className="footer__socials">
        <a
          href="https://www.facebook.com"
          className="footer__icons"
          aria-label="Facebook"
        >
          <FaFacebookF />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.discord.com"
          className="footer__icons"
          aria-label="Discord"
        >
          <FaDiscord />
          <span>Discord</span>
        </a>
        <a
          href="https://www.youtube.com"
          className="footer__icons"
          aria-label="Youtube"
        >
          <FaYoutube />
          <span>Youtube</span>
        </a>
        <a
          href="https://www.twitch.com"
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
    </div>
  );
}

export default Footer;
