const Hero = () => {
  return (
    <section className="hero bg-primary text-white pt-20 pb-12">
      <div className="max-w-xl mx-auto text-center m-auto">
        <img
          src="/images/c-shine-digital-transparent.png"
          alt="Company Logo"
          className="w-auto mx-auto"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Driving Success with Next-Generation IT Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Helping You Maximize Operations Management with Digitalization
        </p>
        <a
          href="/services"
          className="bg-cshine-blue-500 text-white py-3 px-8 rounded-full font-semibold  transition duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
