import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
import bcryptjs from "bcryptjs";

//Update Doctor
export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    //If password is being updated it will hash the password first and then update
    if (req.body.password) {
      const salt = await bcryptjs.genSalt(10);
      req.body.password = await bcryptjs.hash(req.body.password, salt);
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Succesfully updated",
      data: updateDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fialed to update",
    });
  }
};

//Delete Doctor
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Succesfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fialed to delete",
    });
  }
};

//Get single Doctor
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Doctor found",
      data: doctor,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No doctor found",
    });
  }
};

//Get all Doctor
export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      ); //Remove sensetive data of Doctors
    }

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No doctors found",
    });
  }
};

//Get doctor Profile Information
export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: "Getting profile info",
      data: { ...rest, appointments },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
};
