const About = () => (
  <section className="max-w mx-auto mt-16 relative bg-white" id="about">
    <div className="col-span-6 sm:col-span-1 flex text-align-center m-5">
      <div className="m-auto mt-10">
        <h1 className="text-primary font-lato font-bold uppercase text-3xl">
          Here's what i'm doing
        </h1>
      </div>
    </div>
    <div className="col-span-6 sm:col-span-1 flex">
      <div className=" m-auto max-w-3xl p-5">
        <p className="text-secundary font-lato -text-align-right">
          I enjoy working with technology, I really feel comfortable coding or just learning new
          libraries or programming tools. I like to search the better way to solve problems
          without forgetting performance and good development practices. I believe that you can
          achieve whatever you want through technology!
        </p>
        <p className="text-secundary text-2s text-center font-lato mt-2 font-semibold">
          Bytes and Sillicon rock my life!
        </p>
      </div>
    </div>

    <div className="col-span-6 sm:col-span-1 mt-5 flex">
      <div className=" m-auto max-w-3xl p-5">
        <h2 className="text-primary font-lato font-bold uppercase lg:text-3xl md:text-2xl">
          What about your skills?
        </h2>
      </div>
    </div>

    <div className="col-span-6 sm:col-span-1  flex text-align-center">
      <div className=" m-auto md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 font-lato text-secondary font-semibold">
          <div className="m-auto lg:max-w-3xl p-5 lg:px-28 lg:py-16  align-middle">
            <p className="text-4xl my-2 text-center">&#127811;</p>
            <h3>Clean Code</h3>
          </div>
          <div className="m-auto md:max-w max-w-full p-5  lg:py-16  align-middle">
            <p className="text-4xl my-2 text-center">&#128274;</p>
            <h3>Secure</h3>
          </div>
          <div className="m-auto max-w-md mx-auto ">
            <p className="text-4xl my-2 text-center">&#128640;</p>
            <h3>Performance</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;