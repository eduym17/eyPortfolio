import { useState } from 'react';
import { iconLogo, iconImago, iconResume } from './utils/icons';
import CVEYM from '../assets/docs/CV-EYM.pdf';
import {
  iconLinkedIn, iconGitHub,
} from './utils/icons';

const Header = () => {
  const [menu, setMenu] = useState(true);

  const handleClick = () => {
    setMenu(!menu);
  };

  const blurHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // Focus left self
      setMenu(true);
    }
  };

  const enterHandlesMenu = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <div className="containerContent flex flex-row justify-between md:justify-between items-center p-4 md:p-6">
        <a href="/">
          <img
            src={iconLogo}
            alt="Asteroidev logoh"
            className="h-12 md:hidden"
          />
          <img
            src={iconLogo}
            alt="Asteroidev imago"
            className="h-12 hidden md:block"
          />
        </a>
        <button
          type="button"
          className={`md:hidden transition-all duration-500 absolute right-3 top-6 rounded-md ${menu ? null : ' py-1 pl-3 pr-1 bg-dev-violet'}`}
          onKeyUp={(e) => enterHandlesMenu(e)}
          onBlur={(e) => blurHandler(e)}
        >
          <div className="flex flex-row gap-6 font-medium">
            <div className={`${menu ? 'hidden' : 'flex flex-col items-start gap-1'}`}>
              <a href="/#aboutMe" className="hover:text-dev-aqua">
                About me
              </a>
              <a href="/#projects" className="hover:text-dev-aqua">
                Projects
              </a>
              <a href="/#stack" className="hover:text-dev-aqua">
                My stack
              </a>
              <a href="/#contact" className="hover:text-dev-aqua">
                Contact
              </a>
              <div className="md:hidden items-center gap-1 md:gap-1 flex">
                <a href={CVEYM} download className="border-2 border-transparent p-1 rounded-full hover:border-dev-aqua transition-colors duration-300">

                  <img
                    src={iconResume}
                    alt={iconResume}
                    className="h-4 md:h-5"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/eduym17/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-transparent p-1 rounded-full hover:border-dev-aqua transition-colors duration-300"
                >
                  <img
                    src={iconLinkedIn}
                    alt={iconLinkedIn}
                    className="h-6 md:h-7"
                  />
                </a>
                <a
                  href="https://github.com/eduym17"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-transparent p-1 rounded-full hover:border-dev-aqua transition-colors duration-300"
                >
                  <img
                    src={iconGitHub}
                    alt={iconGitHub}
                    className="h-6 md:h-7"
                  />
                </a>
              </div>
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => handleClick()}
              className={`hover:cursor-pointer hover:text-dev-aqua ${menu ? 'h-8 w-8' : 'h-6 w-6'}`}
              data-testid={`svgButton ${!menu}`}
            >
              <path
                fillRule="evenodd"
                d={`${menu
                  ? 'M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z'
                  : 'M8.27 3L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3M8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41'
                  } `}
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
        <div className="hidden md:flex gap-5 font-medium text-lg">
          <a
            href="/#aboutMe"
            className="text-dev-gray-40 hover:text-dev-white pb-1 border-b-2 border-transparent hover:border-dev-aqua transition-all duration-500"
          >
            About me
          </a>
          <a
            href="/#projects"
            className="text-dev-gray-40 hover:text-dev-white pb-1 border-b-2 border-transparent hover:border-dev-aqua transition-all duration-500"
          >
            Projects
          </a>
          <a
            href="/#stack"
            className="text-dev-gray-40 hover:text-dev-white pb-1 border-b-2 border-transparent hover:border-dev-aqua transition-all duration-500"
          >
            My stack
          </a>
          <a
            href="/#contact"
            className="text-dev-gray-40 hover:text-dev-white pb-1 border-b-2 border-transparent hover:border-dev-aqua transition-all duration-500"
          >
            Contact
          </a>
        </div>
        <div className="md:flex items-center gap-4 md:gap-1 hidden">
          <a href={CVEYM} download className="border-2 border-transparent p-3 rounded-full hover:border-dev-aqua transition-colors duration-300">

            <img
              src={iconResume}
              alt={iconResume}
              className="h-4 md:h-5"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/eduym17/"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-transparent p-3 rounded-full hover:border-dev-aqua transition-colors duration-300"
          >
            <img
              src={iconLinkedIn}
              alt={iconLinkedIn}
              className="h-6 md:h-7"
            />
          </a>
          <a
            href="https://github.com/eduym17"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-transparent p-3 rounded-full hover:border-dev-aqua transition-colors duration-300"
          >
            <img
              src={iconGitHub}
              alt={iconGitHub}
              className="h-6 md:h-7"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
