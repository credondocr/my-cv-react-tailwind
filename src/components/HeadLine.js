const HeadLine = () => (
  <section className="max-w-3xl mx-auto my-16 relative" id="home">
    <div className="col-span-6 sm:col-span-1 flex text-align-center m-5">
      <div className=" m-auto border-rounded">
        <img
          alt="Cesar Redondo"
          className="rounded-full w-72  border-2 border-transparent hover:border-indigo-400"
          src="me.jpg"
        />
      </div>
    </div>
    <div className="col-span-6 sm:col-span-1 flex text-align-center">
      <div className=" m-auto text-center">
        <h1 className="text-primary text-4xl font-lato font-semibold">Cesar Redondo</h1>
        <h3 className="text-light text-2xl font-lato mt-2 font-semibold">
          Senior Software Engineer
        </h3>
      </div>
    </div>
    <div className="col-span-6 sm:col-span-1 my-6 flex text-align-center">
      <div className=" m-auto">
        <a
          href="https://www.linkedin.com/in/credondocr/"
          rel="noreferrer"
          target="_blank"
          className="bg-transparent uppercase text-light hover:bg-light  hover:text-light py-2 px-4 font-bold text-lg hover:border-transparent rounded bg-dark-title"
        >
          Download Resume
        </a>
      </div>
    </div>
  </section>
);


export default HeadLine;