import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties from the API
  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch properties", err);
        setLoading(false);
      });
  }, []);

  const value = { properties, loading };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
