const Contact = () => (
  <section className="max-w mx-autorelative bg-white" id="contact">
    <div className="col-span-6 sm:col-span-1 flex text-align-center">
      <div className="m-auto my-16">
        <h1 className="text-primary font-lato font-bold uppercase text-3xl">
          &#128236; How to reach me:
        </h1>
        <div className="col-span-6 sm:col-span-1 flex m-5 ">
          <div className="m-auto">
            <div className="grid grid-cols-3 md:grid-cols-2">
              <div className="p-1 m-auto">
                <a href="https://www.linkedin.com/in/credondocr/">
                  <img
                    alt="LinkedIn"
                    src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=flat&logo=linkedin&logoColor=white"
                  />{' '}
                </a>
              </div>
              <div className="p-1 m-auto">
                <a href="mailto:credondocr@gmail.com">
                  <img
                    alt="Gmail"
                    src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;