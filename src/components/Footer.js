import { BsGithub } from "react-icons/bs";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        Made with ❤️ by <b>Sabiya</b>
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/shanolhere"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={18} />
          </a>
        </li>
        <li>
          <a
            href="https://codesandbox.io/u/shanolhere"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineCodeSandbox size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/nerd_fswd"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter size={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
