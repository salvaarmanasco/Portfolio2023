import pkg from "react-icons/gi/index";
const { GiThunderball } = pkg;

const AboutMe = () => {
  return (
    <>
      <div className="flex justify-center" id="aboutme">
        <div className="divider w-[80%] text-PGreen3">
          <p>01.</p>
          <p>About me</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid w-[78%] sm:w-[70%] md:w-[90%] xl:w-[80%] xxl:w-[72%] md:flex md:items-center md:align-middle">
          <div>
            <p className="w-5/6">
              Hi! I'm Salvador, a software engineer based in Santa Fe,
              Argentina. I enjoy creating technological applications, be they
              desktop, web or mobile. In every job I do, I look for the best
              user experience, committing myself and focusing on every little
              detail. Here are a few technologies I've been working with
              recently:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
              <div className="flex align-middle items-center ">
                <GiThunderball />
                <p>Javascript</p>
              </div>
              <div className="flex align-middle items-center ">
                <GiThunderball />
                <p>React</p>
              </div>
              <div className="flex align-middle items-center">
                <GiThunderball />
                <p>Typescript</p>
              </div>
              <div className="flex align-middle items-center">
                <GiThunderball />
                <p>Next</p>
              </div>
              <div className="flex align-middle items-center ">
                <GiThunderball />
                <p>Node</p>
              </div>
              <div className="flex align-middle items-center ">
                <GiThunderball />
                <p>PostgreSQL</p>
              </div>
              <div className="flex align-middle items-center ">
                <GiThunderball />
                <p>Tailwind</p>
              </div>
              <div className="flex align-middle items-center">
                <GiThunderball />
                <p>Astro</p>
              </div>
            </div>
          </div>
          <div className="group justify-center align-middle items-center flex">
            <div className="relative w-60">
              <img
                className="mask mask-squircle w-full inset-0 opacity-25 bg-opacity-70  transition-opacity duration-300 group-hover:opacity-100"
                src="https://res.cloudinary.com/dxvflpraz/image/upload/v1693419208/gz6m3opp81p4ykxwftjp.png"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
