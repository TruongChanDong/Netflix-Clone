import React from "react";
import SavedShow from "../components/SavedShow";

const Account = () => {
  return (
    <div className="w-full text-white ob">
      <img
        className="w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/fdec10e4-e82e-4f69-bf4d-dee5bfcfd0d9/VN-vi-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShow />
    </div>
  );
};

export default Account;
