import * as Property from "../models/property.js";
import { create } from "../models/property.js";
import cloudinary from "../configs/cloudinary.js";

// Get all properties => GET /api/properties
export const getAllProperties = async (req, res, next) => {
  try {
    const properties = await Property.getAll();
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Create a new property => POST /api/property/new
export const createProperty = async (req, res, next) => {
  const { title, location, price, description } = req.body;

  if (!title || !location || !price) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "property-app" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    const image_url = result.secure_url;
    const image_public_id = result.public_id;

    // Save the property to the database
    const property = await create({
      title,
      location,
      price,
      description,
      image_url,
      image_public_id,
    });

    res.status(201).json({
      success: true,
      message: "Property added",
      property,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
