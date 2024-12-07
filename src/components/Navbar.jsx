import {FaLinkedin, FaYoutube} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
  <div className='flex flex-shrink-0 items-center'>
  </div>
  <div className="m-8 flex intems-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/adrian-zawadzki-093a90169/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://github.com/AdrianZawadzkiDDay" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://www.youtube.com/@ZCODE01" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
  </div>
  </nav>
}

export default Navbar