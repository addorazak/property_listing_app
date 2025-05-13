import express from "express";
import {
  createProperty,
  getAllProperties,
} from "../controllers/propertyController.js";
import upload from "../configs/multer.js";

const propertyRouter = express.Router();

// Define routes
propertyRouter.route("/properties").get(getAllProperties);
propertyRouter
  .route("/property/new")
  .post(upload.single("image"), createProperty);

export default propertyRouter;
