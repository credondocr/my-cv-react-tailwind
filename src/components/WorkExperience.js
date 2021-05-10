const WorkExperience = () => {
  const formatter = new Intl.DateTimeFormat('us', { month: 'short' });
  return (
    <section className="max-w mx-auto bg-white" id="experience">
      <div className="col-span-6 sm:col-span-1 flex text-align-center">
        <div className="m-auto my-16">
          <div className="m-auto mt-10">
            <h1 className="text-primary font-lato font-bold uppercase text-3xl">Experience</h1>
          </div>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-1 flex text-align-center font-lato ">
        <div className="m-auto mb-16">
          <div className="m-auto">
            <div>
              <div className="md:w-2/3 m-auto">
                <div className="relative mt-5 text-left">
                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20 text-secondary">
                      <div className="font-bold italic">Now</div>
                      <div className="md:flex space-x-1 text-xs">
                        <div>Oct 2015.</div>
                        <div>-</div>
                        <div>
                          {formatter.format(new Date())} {new Date().getFullYear()}.
                        </div>
                      </div>
                    </div>

                    <div className="border-r-2 border-primary absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>

                    <div className="ml-10">
                      <div className="font-bold text-secondary">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Edify"
                          href="http://www.edify.cr"
                        >
                          Edify Software
                        </a>
                      </div>
                      <div className="italic md:mb-4 text-secondary">Senior Software Engineer</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold">Now</div>
                        <div className="text-xs">
                          Oct 2015 -{' '}
                          {formatter.format(new Date()).charAt(0).toUpperCase() +
                            formatter.format(new Date()).slice(1)}{' '}
                          {new Date().getFullYear()}.
                        </div>
                      </div>
                      <div className="mb-10">
                        <p className="text-primary">
                          Edify is a passionate group of strategic thinkers and creative minds,
                          pushin way beyond the boundaries of technology.
                        </p>
                        <br />
                        <h3 className="text-secondary font-bold mb-2">Highlights</h3>
                        <div>
                          <div className="mb-2">
                            <div className="mb-2">
                              <strong className="text-secondary font-bold">Greatminds</strong>:
                              <p className="text-primary">
                                Microservices conected to Learnosity to handle the Digital
                                assessment process and reports
                              </p>
                            </div>
                            <div className="mb-2">
                              <strong className="text-secondary font-bold">
                                Lumerit Education
                              </strong>
                              :
                              <p className="text-primary">
                                Microservice integration using RabbitMQ and the latest Javascript
                                techniques and technologies like Node, ES6+, ReactJs, etc. In
                                addition to that I build implementations for different services
                                like: Salesforce, Chargify, Shoppify and Invoice ninja.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20 text-secondary">
                      <div className="font-bold italic"/>
                      <div className="md:flex space-x-1 text-xs">
                        <div>Jul 2014.</div>
                        <div>-</div>
                        <div>Set 2015.</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-secondary absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>

                    <div className="ml-10">
                      <div className="font-bold text-secondary">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Edify"
                          href="https://snapfinance.com/"
                        >
                          Snap Technology
                        </a>
                      </div>
                      <div className="italic md:mb-4 text-secondary">Mid. Software Engineer</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold" />
                        <div className="text-xs">Jul 2014 - Set 2015</div>
                      </div>
                      <div className="mb-10">
                        <p className="text-primary">
                          Snap is a digital finance company that provides merchandise financing to
                          brick and mortar as well as e-commerce merchants. The Snap lease-purchase
                          agreement is an innovative financial product which gives the 40% of
                          consumers with poor credit an alternative to payday loans and other
                          high-risk financial products to acquire needed or desired merchandise.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20 text-secondary">
                      <div className="font-bold italic" />
                      <div className="md:flex space-x-1 text-xs">
                        <div>Mar 2011.</div>
                        <div>-</div>
                        <div>Jul 2014.</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-secondary absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute" />
                    </div>

                    <div className="ml-10">
                      <div className="font-bold text-secondary">Wagerweb</div>
                      <div className="italic md:mb-4 text-secondary">Jr. Software Engineer</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold"/>
                        <div className="text-xs">Mar 2011 - Jul 2014</div>
                      </div>
                      <div className="mb-10">
                        <p className="text-primary">
                          Create a mobile betting application using GWT Mobile and HTML5.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20 text-secondary">
                      <div className="font-bold italic"/>
                      <div className="md:flex space-x-1 text-xs">
                        <div>Dic 2010.</div>
                        <div>-</div>
                        <div>Mar 2011.</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-secondary absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"/>
                    </div>

                    <div className="ml-10">
                      <div className="font-bold text-secondary">On Code Solutions</div>
                      <div className="italic md:mb-4 text-secondary">
                        Front-end Developer - Jr. .Net Developer
                      </div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold"/>
                        <div className="text-xs">Dic 2010 - Mar 2011</div>
                      </div>
                      <div className="mb-10">
                        <p className="text-primary">
                          We develop a computer-based system for tracking inventory levels, orders,
                          sales and deliveries.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20 text-secondary">
                      <div className="font-bold italic"/>
                      <div className="md:flex space-x-1 text-xs">
                        <div>Jan 2009.</div>
                        <div>-</div>
                        <div>Feb 2010.</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-secondary absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"/>
                    </div>

                    <div className="ml-10">
                      <div className="font-bold text-secondary">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Edify"
                          href="https://www.infocoop.go.cr"
                        >
                          INFOCOOP
                        </a>
                      </div>
                      <div className="italic md:mb-4 text-secondary">Jr. Java Developer</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold"/>
                        <div className="text-xs">Dic 2010 - Mar 2011</div>
                      </div>
                      <div className="mb-10">
                        <p className="text-primary">
                          Maintenance and new features using Oracle forms during my intership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;