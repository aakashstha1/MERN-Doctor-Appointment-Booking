import User from "../models/UserSchema.js";
import bcryptjs from "bcryptjs";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
//Update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    //If password is being updated it will hash the password first and then update
    if (req.body.password) {
      const salt = await bcryptjs.genSalt(10);
      req.body.password = await bcryptjs.hash(req.body.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Succesfully updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fialed to update",
    });
  }
};

//Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

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

//Get single User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No user found",
    });
  }
};

//Get all User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password"); //Remove sensetive data of users

    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No users found",
    });
  }
};

//Get user Profile Information
export const getUserProfile = async (req, res) => {
  const userId = req.userId;
 

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Getting profie info",
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
};

//Get user appointment schedule
export const getMyAppointments = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId });

    const doctorIds = bookings.map((el) => el.doctor.id);

    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    res.status(200).json({
      success: true,
      message: "Appointments are getting",
      data: doctors,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
};
