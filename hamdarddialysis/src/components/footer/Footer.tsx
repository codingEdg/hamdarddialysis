import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaFacebookMessenger,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareTwitter, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

const tabs = [
  {
    id: 1,
    name: "Home",
    link: "/",
    class: "after:content-['|'] after:ml-[10%] ",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
    class: "after:content-['|'] after:ml-[10%]",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
    class: "after:content-['|'] after:ml-[10%]",
  },
  {
    id: 4,
    name: "About",
    link: "/about",
    class: "after:content-['|'] after:ml-[10%]",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
    class: "",
  },
];
const icons = [
  {
    id: 1,
    tag: <FaFacebookSquare className="text-white text-xl" />,
    link: "/",
  },
  {
    id: 2,
    tag: <FaFacebookMessenger className="text-white text-xl" />,
    link: "/",
  },
  {
    id: 3,
    tag: <FaInstagramSquare className="text-white text-xl" />,
    link: "/",
  },
  {
    id: 4,
    tag: <FaSquareTwitter className="text-white text-xl" />,
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className=" bg-blue-950 box-border py-14 px-10 flex flex-col md:flex-row items-center justify-center gap-5 text-white">
      <div className="w-full flex flex-col gap-3 justify-center items-center  md:gap-6">
        <h3 className="text-2xl md:text-3xl cursor-pointer font-roboto font-semibold text-green-500 shadow-md hover:shadow-lg hover:text-green-400 hover:scale-105 transition-transform duration-200">
          <Link to="/">HAMDARDDIALYSIS</Link>
        </h3>
        <ul className="flex flex-row gap-4 border-red-400 ">
          {tabs.map((tab) => (
            <li key={tab.id}>
              {" "}
              <Link className={`${tab.class}`} to={tab.link}>
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className=" text-gray-300 text-sm">HAMDARDDIALYSIS © 2015</p>
      </div>

      <div className="w-full">
        <div className="flex items-center mb-4">
          <FaLocationDot className="  text-white rounded-full text-lg flex items-center justify-center" />
          <p className="ml-3">
            <span>Irene hospital, Block DD,23 kalkaji,</span> New Delhi, Delhi
            110019
          </p>
        </div>
        <div className="flex items-center mb-4">
          <IoCall className="text-white rounded-full text-lg flex items-center justify-center" />
          <p className="ml-3">
            <Link to="tel:+919311241059">+91 9311241059</Link> |{" "}
            <Link to="tel:+917863841059">+91 7863841059</Link>
          </p>
        </div>
        <div className="flex items-center">
          <BiLogoGmail className="text-white rounded-full text-lg flex items-center justify-center" />
          <p className="ml-3">
            <Link to="mailto:support@hamdarddialysis.com">
              support@hamdarddialysis.com
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full">
        <p className="leading-5 text-gray-400 text-sm text-center">
          <span className="text-white font-semibold text-lg mb-4 text-center block">
            About the company
          </span>
          At our Dialysis Hospital, we prioritize patient well-being through
          advanced treatments and compassionate care. Our expert team delivers
          personalized dialysis services in a state-of-the-art facility,
          ensuring both medical excellence and a supportive atmosphere for a
          better quality of life.
        </p>
        <div className="mt-5 flex flex-row gap-3 items-center ml-[35%] ">
          {icons.map((icon) => (
            <Link key={icon.id} to={icon.link}>
              {icon.tag}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
