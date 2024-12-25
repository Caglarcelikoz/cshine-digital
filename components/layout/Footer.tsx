const Footer = () => {
  return (
    <footer className="pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center space-x-6">
          <a
            href="/privacy"
            className="text-gray-300 hover:text-cshine-blue-500"
          >
            Privacy Terms
          </a>
          <a href="/terms" className="text-gray-300 hover:text-cshine-blue-500">
            Terms and Conditions
          </a>
        </div>
        <p className="mt-4 text-center text-gray-300">
          &copy; {new Date().getFullYear()} C-Shine Digital. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
