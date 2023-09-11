import MobileSideTabs from "./mobileSideTabs/MobileSideTabs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Topbar from "./topbar/Topbar";
import Dropdown from "../common/dropdown/Dropdown";
import React, { useState } from "react";

const servicesTabs = [
  { name: "On Site Dialysis", path: "/services/onsitedialysis" },
  { name: "General Check Up", path: "/services/generalcheckup" },
  { name: "Dialysis On Wheels", path: "/services/dialysisonwheels" },
];

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <React.Fragment>
      <Topbar />
      <nav className="flex justify-between items-center bg-white px-10 py-5 ">
        {/* Logo  */}
        <div className={" cursor-pointer "}>
          <h2 className="text-xl sm:text-xl font-roboto font-bold hover:scale-110 text-green-500  hover:text-green-600 duration-300 hover:underline">
            <Link to="/">HAMDARDDIALYSIS</Link>
          </h2>
        </div>

        {/* middle Tabs */}
        <div className="hidden sm:flex xl:flex-2">
          {/* Main navigation container  */}
          <div className="flex items-center justify-center flex-row gap-5 font-semibold  text-slate-500 ">
            <Link
              to="/products"
              className="cursor-pointer hover:text-slate-900 "
            >
              Products
            </Link>
            <Dropdown name="Services" data={servicesTabs} />
            <Link to="/about" className="cursor-pointer hover:text-slate-900 ">
              About
            </Link>
            <Link
              to="/contact"
              className="cursor-pointer hover:text-slate-900 "
            >
              Contact
            </Link>
          </div>
        </div>

        {/* right space */}
        <div className="hidden sm:flex">
          <button
            type="button"
            className="px-6 py-2 bg-purple-600  hover:bg-green-600 "
          >
            <Link to="/donation">
              <span className=" text-white  scale-200">Donate Now</span>
            </Link>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="block sm:hidden">
          <button
            onClick={() => setOpenMobile(!openMobile)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 transition-all duration-500 "
          >
            {openMobile ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* mobile side tabs */}
      {openMobile && (
        <div className="">
          {openMobile && <MobileSideTabs setOpen={setOpenMobile} />}
        </div>
      )}
    </React.Fragment>
  );
}
