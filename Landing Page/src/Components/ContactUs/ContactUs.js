import { text } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGooglePlus,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={classes.contactUsContainer}>
      <div className={`${classes.contactUs} container`}>
        <h1>GET IN TOUCH</h1>
        <div className={classes.form}>
          <form>
            <div>
              <input type={text} placeholder="Name" />
              <input type={"email"} placeholder="Email" />
            </div>
            <input type={"text"} placeholder="Subject" />
            <textarea placeholder="Message" />
            <button>SEND MESSAGE</button>
          </form>
          <div className={classes.details}>
            <ul>
              <li>
                Call:<p>012-345-6789</p>
              </li>
              <li>
                Email:<p>youremailid@gmail.com</p>
              </li>
              <li>
                Location:<p>3179 Raccoon Run Seattle, WA 98109</p>
              </li>
            </ul>
            <h3>Follow</h3>
            <ul className={classes.brands}>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faGooglePlus} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faWhatsapp} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
