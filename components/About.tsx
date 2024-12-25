import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import BackgroundPattern from "./layout/BackgroundPattern";

const About = () => {
  return (
    <BackgroundPattern variant="light" className="py-20">
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-900 mb-6">
            Building Tomorrow&rsquo;s Digital Solutions Today
          </h2>
          <p className="text-lg text-gray-700">
            At C-Shine Digital, we are more than just developers – we are your
            strategic partners in digital transformation. Our passion lies in
            turning complex challenges into elegant, efficient solutions that
            drive real business value.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid gap-8">
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cshine-blue-500 before:to-cyan-500">
                  <h3 className="text-xl font-semibold text-midnight-900 mb-2">
                    Innovative Solutions
                  </h3>
                  <p className="text-gray-600">
                    We combine cutting-edge technologies with creative thinking
                    to develop solutions that not only solve today&rsquo;s
                    challenges but are built to evolve with your business.
                  </p>
                </div>

                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:to-cshine-blue-500">
                  <h3 className="text-xl font-semibold text-midnight-900 mb-2">
                    Collaborative Approach
                  </h3>
                  <p className="text-gray-600">
                    Your success is our priority. We work closely with you,
                    ensuring clear communication and alignment throughout the
                    development process to deliver exactly what you need.
                  </p>
                </div>

                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cshine-blue-500 before:to-cyan-500">
                  <h3 className="text-xl font-semibold text-midnight-900 mb-2">
                    Quality & Reliability
                  </h3>
                  <p className="text-gray-600">
                    Every line of code we write, every solution we design is
                    crafted with precision and tested thoroughly to ensure
                    robust, reliable performance.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700 pt-4">
                <FaMapMarkerAlt className="h-5 w-5 text-cshine-blue-500" />
                <p className="text-lg">
                  Delivering Excellence from Belgium to the World
                </p>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-cshine-blue-500/10 to-transparent rounded-3xl blur-2xl" />
                <Image
                  src="/images/hero.svg"
                  alt="Digital Solutions Visualization"
                  width={0}
                  height={0}
                  sizes="80vw"
                  style={{ width: "32rem" }}
                  className="w-full h-auto relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default About;
