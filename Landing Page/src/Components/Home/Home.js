import classes from "./Home.module.css";
import homeImage from "./home.png";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={`${classes.home} container`}>
        <div className={classes.intro}>
          <h1>Make Your Marketing Real</h1>
          <p>
            Ut enim ad minima veniam quis nostrum exercitationem ullam corporis
            at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis
            autem
          </p>
          <button>LEARN MORE</button>
        </div>
        <img src={homeImage} alt="employees" />
      </div>
    </div>
  );
};

export default Home;
