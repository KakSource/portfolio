import "../styles/Footer.css";

let Footer = () => {
  return (
    <div className="Footer">
      <div className="img-holder">
        <a href="https://www.facebook.com/gaston.bernardez.95/">
          <img alt="facebook icon" src="./imgs/facebook.png"></img>
        </a>
        <a href="https://github.com/KakSource">
          <img alt="github icon" src="./imgs/github.png"></img>
        </a>
        <a href="mailto:kaksource@gmail.com?subject=portfolioCommunication">
          <img alt="email icon" src="./imgs/gmail.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/gaston-ignacio-bernardez-64437b209/">
          <img alt="linkedin icon" src="./imgs/linkedin.png"></img>
        </a>
      </div>
      <div className="info">© 2022 KAK - Front End Developer</div>
    </div>
  );
};

export default Footer;
