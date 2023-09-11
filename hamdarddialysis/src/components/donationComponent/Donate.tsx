import img from "../../assets/images/skull_mobile.png";
import { Link } from "react-router-dom";

function Donate() {
  // console.log("some thing");

  return (
    <section className="relative w-full mt-10 pt-32 flex items-center flex-col md:flex-row">
      <img
        src={img}
        alt="mobile"
        className="absolute w-[18rem] z-2 top-0 md:ml-28 md:top-10 "
      />
      <div className="bg-sky-800 w-full flex flex-col items-center md:items-end gap-2 md:py-32">
        <div className="flex flex-col gap-5 md:gap-10 pt-[30rem] md:pt-0 m-8 md:m-0 md:ml-[36%] md:px-32 ">
          <p className="text-white text-2xl md:text-5xl font-semibold font-roboto">
            Please Help Poors | Donate & Save a Life
          </p>

          <p className="text-white text-lg font-lora">
            Empower lives through your generosity. Click Donate to provide vital
            dialysis treatment for those in need.
          </p>
          <Link
            to="/about"
            className="text-white bg-gradient-to-r from-green-400 to-blue-500 text-center hover:from-pink-500 hover:to-yellow-500 border-none shadow-md font-medium py-3 text-xl hover:font-itim "
          >
            Donate & Save a Life
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Donate;
