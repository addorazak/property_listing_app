import React from "react";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Properties</h1>
      <PropertyList />
    </div>
  );
};

export default Home;
