const Divider = () => {
  return (
    <div className="inline-flex items-center justify-center w-full py-4">
      <div className="w-full h-0.5 my-8 bg-cshine-blue-500 border-0 rounded"></div>
      <div className="absolute px-4 -translate-x-1/2  left-1/2 bg-white">
        <img
          src="/images/logo_img_transparent.png"
          alt="Trusted Partners"
          className="w-24 "
        />
      </div>
    </div>
  );
};

export default Divider;
