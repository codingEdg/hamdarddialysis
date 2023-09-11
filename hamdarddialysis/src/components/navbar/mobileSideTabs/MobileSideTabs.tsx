import "./mobileSideTabs.css";
import React from "react";
import { Link } from "react-router-dom";

interface MobileTabs {
  id: number;
  link: string;
  name: string;
}
const mobileTabs: MobileTabs[] = [
  {
    id: 1,
    link: "patients",
    name: "Patients",
  },
  {
    id: 2,
    link: "partners",
    name: "Partners",
  },
  {
    id: 3,
    link: "careers",
    name: "Careers",
  },
  {
    id: 4,
    link: "about",
    name: "About Us",
  },
  {
    id: 5,
    link: "contact",
    name: "Contact Us",
  },
];

export default function MobileSideTabs({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="absolute w-full h-auto z-10 bg-blue-50  flex  flex-col gap-8 p-8 font-roboto  ">
      <div className="flex  flex-col gap-3">
        {mobileTabs.map((tab) => (
          <div
            key={tab.id}
            className="text-slate-500 w-full bg-white px-5 hover:text-slate-800 rounded py-1 font-bold  "
          >
            <Link
              className="bg-white "
              onClick={() => setOpen(false)}
              to={`/${tab.link}`}
            >
              {tab.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
