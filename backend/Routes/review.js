import express from "express";

import {
  getAllReviews,
  createReview,
} from "../controllers/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
const router = express.Router({ mergeParams: true }); 
//{ mergeParams: true } allows review.js to access doctorId from the parent router (doctor.js).

router
  .route("/")
  .get(getAllReviews)// GET /doctors/:doctorId/reviews → Fetch all reviews for a doctor
  .post(authenticate, restrict(["patient"]), createReview); // POST /doctors/:doctorId/reviews

export default router;
