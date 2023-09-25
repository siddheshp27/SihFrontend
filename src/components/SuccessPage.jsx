import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-green-400 text-9xl">Success</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {searchParams.get("id")}
        </p>

        <p className="mt-4 text-gray-500">Authenticated Succcesfully</p>

        <Link
          to="/"
          href="#"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
