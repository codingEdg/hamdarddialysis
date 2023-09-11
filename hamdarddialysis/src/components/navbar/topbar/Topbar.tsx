import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

export default function Topbar() {
  return (
    <div className=" hidden sm:flex w-full px-12 py-2 justify-between items-center bg-indigo-50 truncate   ">
      {/* left */}
      <div className="flex justify-center items-center gap-x-3 text-xs font-semibold ">
        <Link
          to="mailto:info@hamdarddialysis.com"
          className="flex gap-x-1 items-center"
        >
          <TfiEmail className="text-green-700 text-lg" />{" "}
          info@hamdarddialysis.com
        </Link>
        <span className="text-gray-300">| </span>
        <Link to="tel:+919311241059" className="flex gap-x-1 items-center">
          <IoIosCall className="text-green-700 text-lg" /> +(91) 9311241059
        </Link>
        <span className="text-gray-300">| </span>
        <Link to="tel:+917863841059" className="flex gap-x-1 items-center">
          <MdAddIcCall className="text-green-700 text-lg" /> +(91) 7863841059
        </Link>
      </div>
      {/* right */}
      <div className="hidden lg:flex pl-4 justify-center items-center gap-x-3 ">
        <Link
          to="/"
          className="text-center text-white bg-blue-700 px-3 py-1 hover:bg-green-700 rounded-md"
        >
          Sunday OPD
        </Link>
        <Link
          to="#"
          className="text-center text-white bg-green-700 px-3 py-1 hover:bg-blue-700 "
        >
          Book a Vaccineee
        </Link>
        <Link
          to="#"
          className="text-center text-white bg-green-700 px-3 py-1 hover:bg-blue-700 "
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
