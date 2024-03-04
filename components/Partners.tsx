import Image from "next/image";
const Partners = () => {
  return (
    <section className="container mx-auto">
      <div className="mb-8 text-center">
        <div className="py-4 md:px-12">
          <div className=" mx-auto xl:px-32">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mx-8">
                <div className="relative z-10 bg-white rounded-lg shadow-cshine-blue-500 shadow-sm hover:shadow-md hover:shadow-cshine-blue-500 px-6 py-12 md:px-12">
                  <h2 className="mb-8 text-3xl font-bold text-gray-800">
                    Work with us
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Partnering with organizations across the globe, we strive to
                    deliver cutting-edge solutions and pioneer innovation.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <a
                      href="https://www.telenet.be/"
                      target="_blank"
                      className="mx-4 flex w-[160px] items-center justify-center"
                    >
                      <Image
                        src={"/images/telenet.png"}
                        alt="Telenet"
                        width={200}
                        height={0}
                      />
                    </a>
                    <a
                      href="#"
                      className="mx-4 flex w-[200px] items-center justify-center"
                    >
                      <Image
                        src="/images/mkm.png"
                        alt="MKM Solutions"
                        width={200}
                        height={0}
                      />
                    </a>
                    <a
                      href="https://www.ravago.com/"
                      target="_blank"
                      className="mx-4 flex w-[150px] items-center justify-center"
                    >
                      <Image
                        src="/images/ravago-logo.png"
                        alt="Ravago"
                        width={80}
                        height={0}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:-ml-24 mt-0 md:mt-0">
                <div className="w-full rounded-lg shadow-lg">
                  <Image
                    src="/images/trusted.jpeg"
                    alt="Trusted Partners"
                    layout="responsive"
                    width={0}
                    height={0}
                    className="rounded-3xl w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;