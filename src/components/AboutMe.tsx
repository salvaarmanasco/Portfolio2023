import { AiOutlineThunderbolt } from "react-icons/ai";

const AboutMe = () => {
  return (
    <>
      <div className="flex justify-center" id="aboutme">
        <div className="divider w-[80%] text-POrange">
          <p>01.</p>
          <p>About me</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-[16px] md:px-[200px]">
        <div className="w-10/12 md:w-full md:max-w-xl mt-10">
          <p>
            Hi! I'm Salvador, a software engineer based in Santa Fe, Argentina.
            I enjoy creating technological applications, be they desktop, web or
            mobile. In every job I do, I look for the best user experience,
            committing myself and focusing on every little detail. Here are a
            few technologies I've been working with recently:
          </p>
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div className="flex align-middle items-center">
              <AiOutlineThunderbolt />
              <p>Javascript</p>
            </div>
            <div className="flex align-middle items-center ">
              <AiOutlineThunderbolt />
              <p>React</p>
            </div>
            <div className="flex align-middle items-center">
              <AiOutlineThunderbolt />
              <p>Typescript</p>
            </div>
            <div className="flex align-middle items-center">
              <AiOutlineThunderbolt />
              <p>Next</p>
            </div>
            <div className="flex align-middle items-center ">
              <AiOutlineThunderbolt />
              <p>Node</p>
            </div>
            <div className="flex align-middle items-center ">
              <AiOutlineThunderbolt />
              <p>PostgreSQL/MySQL</p>
            </div>
            <div className="flex align-middle items-center ">
              <AiOutlineThunderbolt />
              <p>Tailwind</p>
            </div>
            <div className="flex align-middle items-center">
              <AiOutlineThunderbolt />
              <p>Astro</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center group">
          <div className="relative w-60">
            <img
              className="mask mask-squircle w-full inset-0 opacity-25 bg-opacity-70  transition-opacity duration-300 group-hover:opacity-100"
              src="../../public/profile.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
