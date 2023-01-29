import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./About.module.css";
import {
  faChartSimple,
  faChessRook,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className={classes.aboutContainer}>
      <div className={`${classes.about} container`}>
        <h1>ABOUT US</h1>
        <div>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faLightbulb}
                size="5x"
                className={classes.icon}
              />
              <h2>Creative Design</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut
                odit aut fugit sed quia consequuntur magni
              </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChessRook}
                size="5x"
                className={classes.icon}
              />
              <h2>Strategy Solutions</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut
                odit aut fugit sed quia consequuntur magni
              </p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChartSimple}
                size="5x"
                className={classes.icon}
              />
              <h2>Dynamic Growth</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut
                odit aut fugit sed quia consequuntur magni
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
