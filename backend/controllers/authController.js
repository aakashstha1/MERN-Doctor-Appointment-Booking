import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

// Generate token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
};

//Register
export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;
    if (role == "patient") {
      user = await User.findOne({ email });
    } else if (role == "doctor") {
      user = await Doctor.findOne({ email });
    }

    //Check if user exist
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    //Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    if (role == "patient") {
      user = new User({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    }

    if (role == "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "User successfully created." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error, Try again!" });
  }
};

//Login
export const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;

    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }

    //Check if user exist or not
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //Compare password
    const isPasswordMatch = await bcryptjs.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    //Get token
    const token = generateToken(user);

    // Exclude sensitive fields before sending response
    const { password, appointent, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: { ...rest },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to login, Try again!" });
  }
};
