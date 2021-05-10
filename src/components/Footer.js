const Footer = () => (
  <section className="max-w-full mx-auto  relative bg-dark-title">
    <div className="col-span-3 sm:col-span-1 flex">
      <div className="m-auto my-10">
        <div className="grid grid-cols-3 md:grid-cols-3">
          <div className="p-1 m-auto">
            <a
              href="https://www.github.com/credondocr"
              target="_blank"
              rel="noopener noreferrer"
              alt="My personal Github"
            >
              <img src="/github-logo.svg" width="28" alt="Github" />
            </a>
          </div>
          <div className="p-1 m-auto">
            <a
              href="https://www.twitter.com/credondocr"
              target="_blank"
              rel="noopener noreferrer"
              alt="My twitter account"
            >
              <img src="/twitter.svg" width="28" alt="Twitter" />
            </a>
          </div>
          <div className="p-1 m-auto">
            <a
              href="https://www.linkedin.com/in/credondocr/"
              target="_blank"
              rel="noopener noreferrer"
              alt="My liinkedin account"
            >
              <img
                className="fill-current text-white"
                src="/linkedin.svg"
                width="28"
                height="36"
                alt="Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;