import banner from "../assets/banner.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="homeTitle">
        <h1 className="title1">Take Notes </h1>
        <p className="title2">Capture important ideas by taking notes.</p>
        <p className="title2">
          <span className="noteIt">NoteIt</span> helps you in increasing your
          productivity by organizing your life.
        </p>
        <div className="btn">
          <button className="getStarted">
            <NavLink to="signup">Get Started</NavLink>
          </button>
        </div>
      </div>
      <div className="image">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};
export default Home;
