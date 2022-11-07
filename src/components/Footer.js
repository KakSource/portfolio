import "../styles/Footer.css";
import facebook_img from "../assets/imgs/facebook.png";
import github_img from "../assets/imgs/github.png";
import gmail_img from "../assets/imgs/gmail.png";
import linkedin_img from "../assets/imgs/linkedin.png";

let Footer = () => {
  return (
    <div className="Footer">
      <div className="img-holder">
        <a href="https://www.facebook.com/gaston.bernardez.95/">
          <img alt="facebook icon" src={facebook_img}></img>
        </a>
        <a href="https://github.com/KakSource">
          <img alt="github icon" src={github_img}></img>
        </a>
        <a href="mailto:gastonignaciob@gmail.com?subject=portfolioCommunication">
          <img alt="email icon" src={gmail_img}></img>
        </a>
        <a href="https://www.linkedin.com/in/gaston-ignacio-bernardez-64437b209/">
          <img alt="linkedin icon" src={linkedin_img}></img>
        </a>
      </div>
      <div className="info">© 2022 KAK - Front End Developer</div>
    </div>
  );
};

export default Footer;
