import Copyright from "./Copyright";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footerContainer}>
        <div className={`${classes.footerSection} container`}>
          <ul>
            <li className={classes.aboutUs}>
              <h3>ABOUT US</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                that is doloremque totam that laudantiume.
              </p>
            </li>
            <li>
              <h3>COMPANY</h3>
              <ul>
                <li>Monitoring Grader</li>
                <li>Job Opening</li>
                <li>Customers</li>
                <li>Privacy</li>
              </ul>
            </li>
            <li>
              <h3>SUPPORT</h3>
              <li>Get Started</li>
              <li>Blog</li>
              <li>Knowledge Base</li>
            </li>
            <li>
              <h3>LEGAL</h3>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Customers</li>
              <li>Pricing</li>
            </li>
          </ul>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
