import pkg from "react-icons/bs/index";
const { BsLinkedin, BsGithub } = pkg;

const Footer = () => {
  return (
    <footer className="footer footer-center pt-10 pb-5 bg-[#191716] rounded">
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
        <p>Copyright © 2025 - Salvador Armanasco Catalin</p>
      </div>
    </footer>
  );
};

export default Footer;
