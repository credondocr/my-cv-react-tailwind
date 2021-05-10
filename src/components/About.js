const About = () => (
  <section className="max-w mx-auto my-16 relative bg-white" id="about">
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
        <p className="text-secundary text-2s text-center font-lato my-6 font-semibold">
          Bytes and Sillicon rock my life!
        </p>
      </div>
    </div>
  </section>
);

export default About;