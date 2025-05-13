import mysql from "mysql2/promise";
import "dotenv/config.js";

let db = null;

export const connectDB = async () => {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });
    console.log("Connected to property_app database!");
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    process.exit(1);
  }
};

// Export the db connection for use in other files
export const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.");
  }
  return db;
};
