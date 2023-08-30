import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer footer-center pt-10 pb-5 bg-base-200 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/salvador-armanasco-catalin-18b045205/">
            <BsLinkedin className="w-10 h-10" />
          </a>
          <a href="https://github.com/salvaarmanasco">
            <BsGithub className="w-10 h-10" />
          </a>
        </div>
      </div>
      <div>
        <p>salvador.armanasco@gmail.com</p>
        <p>Copyright © 2023 - Salvador Armanasco</p>
      </div>
    </footer>
  );
};

export default Footer;
