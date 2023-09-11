import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface Props {
  card: Card;
}
interface Card {
  id: number;
  imgURL: any;
  title: string;
  desc: string;
  link: string;
}

const ServiceCard = ({ card }: Props) => {
  return (
    <section className="max-w-2xl ">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full overflow-hidden">
          <img
            className="rounded-t-lg object-cover h-64 w-full hover:scale-110 transition-transform duration-200"
            src={card.imgURL}
            alt={card.title}
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <Link to="#">
            <h5 className="text-gray-800 font-bold font-roboto text-xl tracking-tight mb-2 dark:text-white">
              {card.title}
            </h5>
          </Link>
          <p className="font-normal font-varela_round text-gray-600 mb-3 dark:text-gray-400 line-clamp-2 ">
            {card.desc}
          </p>
          <Link
            to={card.link}
            className="group text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <AiOutlineArrowRight className="text-white ml-5 text-lg group-hover:translate-x-6 transition-transform duration-300 " />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
