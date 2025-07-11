const Hero = () => {
  return (
    <div className="flex justify-center items-center align-middle">
      <div className="ml-10 sm:mx-20 md:mx-[105px] lg:mx-[120px] xl:mx-[90px] xl:w-[80%] xxl:w-[95%] xxl:mr-10">
        <div className="hero-content md:mt-[60px]">
          <div>
            <p className="text-PWhite">Hi, my name is </p>
            <h1 className="text-[40px] lg:text-[50px] xl:text-[70px]  font-bold text-PWhite">
              Salvador Armanasco Catalin
            </h1>
            <h1 className="text-[40px] lg:text-[50px] xl:text-[70px] font-bold  text-[#3ee95b]">
              Leveling Up Web Development
            </h1>
            <p className="text-PWhite w-[50%] mt-10">
              I'm a software engineer based in Santa Fe, AR specializing in
              building exceptional websites, applications, and everything in
              between.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
