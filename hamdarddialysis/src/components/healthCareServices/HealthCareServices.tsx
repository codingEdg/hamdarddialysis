import ServiceCard from "./ServiceCard";
import { servicesCardData as cards } from "../../assets/static/servicesData";

const HealthCareServices = () => {
  return (
    <section className="w-full p-3 my-20 flex flex-col items-center justify-center gap-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-xl md:text-2xl font-lora text-slate-200">
          Departments of Curing Decease
        </h1>
        <p className="text-2xl md:text-4xl text-white font-roboto font-semibold ">
          Manage Your Healthcare Services
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {cards.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default HealthCareServices;
