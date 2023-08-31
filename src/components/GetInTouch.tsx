const GetInTouch = () => {
  return (
    <div className="h-[400px]" id="getintouch">
      <div className="flex justify-center mt-16">
        <div className="divider w-[80%] text-PGreen3">
          <p>03.</p>
          <p>Get In Touch</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30px] md:text-[50px] font-bold text-PWhite">
          Get In Touch
        </h1>
        <p className="text-PGreen3 max-w-3xl text-center mt-5 w-4/6">
          I'm currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <button className="btn btn-outline mt-14 hover:bg-PGreen3 border-PWhite text-PWhite">
          <a href="mailto:salvador.armanasco@gmail.com">Get in touch</a>
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
