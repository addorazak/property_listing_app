import { getDB } from "../configs/db.js";

// Get all properties
export const getAll = async () => {
  const db = getDB();
  const [rows] = await db.query("SELECT * FROM properties");
  return rows;
};

// Create a new property
export const create = async ({
  title,
  location,
  price,
  image_url,
  image_public_id,
  description,
}) => {
  const db = getDB();
  const [result] = await db.query(
    "INSERT INTO properties (title, location, price, image_url, image_public_id, description) VALUES (?, ?, ?, ?, ?, ?)",
    [title, location, price, image_url, image_public_id, description]
  );
  return result.insertId;
};
