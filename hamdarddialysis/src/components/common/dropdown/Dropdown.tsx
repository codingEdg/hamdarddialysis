import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

interface Data {
  name?: string;
  path?: string;
}
interface Props {
  data: Data[];
  name: string;
}

export default function Dropdown(props: Props) {
  return (
    <React.Fragment>
      <div className="group inline-block relative ">
        <button className="font-semibold text-slate-500 hover:text-slate-900 py-2 px-4 rounded inline-flex items-center">
          <Link to={`/${props.name.toLowerCase()}`} className="mr-1">
            {props.name}
          </Link>
          <IoMdArrowDropdown />
        </button>

        <ul className="absolute hidden text-white pt-1 group-hover:block whitespace-break-no-wrap text-sm z-10 ">
          {props.data.map((tab) => (
            <li key={tab.name}>
              <Link
                className="rounded-t bg-purple-600 hover:bg-blue-400 py-2 px-4 block "
                to={tab.path!}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
