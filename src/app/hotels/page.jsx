import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const page = () => {
  return (
    <main>
      <div className="flex flex-wrap">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <Navbar />
          <h1>Liste des hotels</h1>
        </div>
      </div>
    </main>
  );
};

export default page;
