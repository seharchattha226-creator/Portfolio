import { PERSONAL_INFO } from '../data/constants';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Designed & Developed with ❤️ by Sehar Fiaz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
