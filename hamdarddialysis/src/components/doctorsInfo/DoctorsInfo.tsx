import Card from "./Card";
import { doctorImageData as cards } from "../../assets/static/cardImages";

const DoctorsInfo = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 pt-10">
      <div className="w-full flex flex-col justify-center items-center gap-3 ">
        <h1 className="text-sky-800 font-lora text-5xl font-bold ">
          Our Doctors
        </h1>
        <p className="font-lora text-lg ">Providing Best Care For Patients</p>
        <p className="font-itim text-lg text-sky-400">
          At our hospital, our dedicated team of skilled doctors provides
          round-the-clock, top-tier medical care. With expertise across various
          specialties, our compassionate doctors offer specialized treatment,
          ensuring our patients receive the best possible care at any hour. Your
          well-being is our priority, and our doctors are committed to
          delivering exceptional and timely medical attention whenever you need
          it.
        </p>
        <button className="text-white text-lg py-2 px-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
          Know More
        </button>
      </div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
};

export default DoctorsInfo;
