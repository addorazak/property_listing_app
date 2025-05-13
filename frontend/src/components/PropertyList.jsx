import React, { useContext } from "react";
import PropertyCard from "./PropertyCard";
import Loading from "./Loading";
import { AppContext } from "../context/AppContext";

const PropertyList = () => {
  const { properties, loading } = useContext(AppContext);

  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={() => {
            console.log("Go to property details", property.id);
          }}
        />
      ))}
    </div>
  );
};

export default PropertyList;
