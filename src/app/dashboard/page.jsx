import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

const page = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div>
        <h1>Dashboard</h1>
      </div>
    </main>
  );
};

export default page;
