import React from "react";
import { Contexthook } from "../context/Context";

const View = () => {
  const { state, dispatch } = Contexthook();

  const handleDelete = (email) => {
    dispatch({ type: "DELETE", email: email });
  };

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 m-2">
        {state.entries.map((data, index) => (
          <li
            key={index}
            className="bg-slate-300  p-8 rounded-lg flex flex-col items-center justify-center font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p className="my-1  ">
              Name: {data.firstName} {data.lastName}
            </p>
            <p className="my-1   ">Email: {data.email}</p>
            <p className="my-1  ">Phone: {data.phone}</p>
            <p className="my-1  ">Age: {data.age}</p>
            <p className="my-1  ">Country: {data.country}</p>
            <div className="border-4 p-4 rounded-lg">
              <p className="my-1   text-xl underline ">Address</p>
              <p className="my-1  ">Street: {data.street},</p>
              <p className="my-1  ">Town: {data.town},</p>
              <p className="my-1  ">Postcode: {data.postcode}</p>
            </div>
            <p className="text-lg mt-2 border-4 border-transparent border-b-cyan-500 p-1 ">
              Visits: {data.visits}
            </p>
            <button
              className="p-2 rounded-lg m-4 text-slate-50  w-1/2  hover:outline bg-red-500"
              onClick={() => handleDelete(data.email)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default View;
