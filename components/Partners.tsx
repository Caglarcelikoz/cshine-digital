import Image from "next/image";
const Partners = () => {
  return (
    <section className="container mx-auto px-6">
      <div className="mb-8 text-center">
        <div className="py-4 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <div className="relative z-10 bg-white rounded-lg shadow-cshine-blue-500 shadow-sm hover:shadow-md hover:shadow-cshine-blue-500 px-6 py-12 md:px-12">
                  <h2 className="mb-8 text-3xl font-bold text-gray-800">
                    Work with us
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Partnering with organizations across the globe, we strive to
                    deliver cutting-edge solutions and pioneer innovation.
                  </p>
                  <div className="flex justify-center items-center">
                    <Image
                      src="/images/ravago.png"
                      alt="Ravago"
                      width={64}
                      height={64}
                      className="mx-2 my-2"
                    />
                    <Image
                      src="/images/mkm.png"
                      alt="MKM Solutions"
                      width={160}
                      height={64}
                      className="mx-2 my-2"
                    />
                    <Image
                      src="/images/telenet-logo.png"
                      alt="Telenet"
                      width={96}
                      height={64}
                      className="mx-2 my-2"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:-ml-12 mt-0 md:mt-0">
                <div className="w-full rounded-lg shadow-lg">
                  <Image
                    src="/images/trusted.jpeg"
                    alt="Trusted Partners"
                    layout="responsive"
                    width={0}
                    height={0}
                    className="rounded-lg w-full h-full"
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
