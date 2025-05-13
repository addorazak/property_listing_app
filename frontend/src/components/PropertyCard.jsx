import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const PropertyCard = ({ property, onClick }) => {
  return (
    <Card className="m-4 w-full sm:w-[300px] cursor-pointer" onClick={onClick}>
      <img
        src={property.image_url || "https://via.placeholder.com/300x180"}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <CardContent>
        <Typography variant="h6">{property.title}</Typography>
        <Typography color="textSecondary">{property.location}</Typography>
        <Typography color="primary">${property.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
