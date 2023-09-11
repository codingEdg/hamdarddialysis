import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import navTabs from "../../assets/navTabs/navtabs";

// Define the type for the navTabs object
type NavTabs = {
  [key: string]: TabData;
};
const tabs = Object.keys(navTabs);

// Explicitly cast navTabs to the correct type
const typedNavTabs: NavTabs = navTabs;

interface TabData {
  id: number;
  title: string;
  para: string;
  imgUrl: string;
  link: string;
}

export default function LocalNav() {
  const [tabData, setTabData] = useState<TabData>(
    typedNavTabs["In-Centre Dialysis"]
  );
  const handleClick = (tab: string) => {
    const newTab = typedNavTabs[tab];
    setTabData(newTab);
  };
  return (
    <div className="bg-white ">
      <section className="flex justify-center items-center flex-col flex-wrap gap-2 md:gap-6 p-10">
        <h1 className="text-cyan-800 text-3xl md:text-5xl md:font-semibold font-lg text-center px-10">
          Elevating the quality of life
        </h1>
        <h5 className="text-slate-500 text-center text-lg md:text-2xl ">
          Ensuring comfort, care and safety at every step of your dialysis
          journey.
        </h5>
      </section>
      <section>
        {/* <!--Tabs navigation--> */}
        <ul className="md:mt-10 flex list-none flex-row overflow-y-scroll md:overflow-y-hidden md:mx-28 border-b-0 pl-0 mb-0 pb-0 ">
          {tabs.map((tab) => (
            <li key={tab} className={"flex-nowrap text-center "}>
              <button
                onClick={() => handleClick(tab)}
                className={
                  "font-semibold uppercase my-2 block border-x-0 border-t-0 border-b-2 border-transparent hover:border-b-sky-600 focus:border-b-sky-600 px-7 pb-3 text-md md:text-base text-sky-600 hover:text-sky-400 whitespace-nowrap"
                }
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* <!--Tabs content--> */}
        <section className="mb-6 w-full flex flex-col md:flex-row-reverse md:justify-around md:items-center px-4 gap-3 ">
          <div className="w-full md:w-[60%]">
            <img src={tabData.imgUrl} alt={tabData.title} loading="lazy" />
          </div>
          <div className="flex flex-col justify-start gap-4 items-start md:w-[40%] md:pr-10">
            <h1 className="text-sky-800 text-2xl md:text-4xl font-semibold">
              {tabData.title}
            </h1>
            <h6 className="">{tabData.para}</h6>

            <button className="group py-1 md:py-2 border border-blue-600 text-blue-600 w-40 flex flex-row  justify-center items-center gap-3 hover:border-blue-400 hover:text-blue-400 hover:w-64 hover:border-2 focus:text-blue-700 focus:border-blue-700 transition-transform duration-300 ease-in-out ">
              Learn More
              <AiOutlineArrowRight className="transition duration-300 ease-linear group-hover:translate-x-6 group-hover:transition-transform " />
            </button>
          </div>

          {/* <div className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block">
            Tab 2 content
          </div>
        
     */}
        </section>
      </section>
    </div>
  );
}
