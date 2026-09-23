import userModel from "../models/user.model.js";
import ApiError from "../utils/api-error.js";
import asyncHandler from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
  const {username, email, password} = req.body;

  const isUserExists = await userModel.findOne({username, email});

  if(isUserExists) {
    throw new ApiError(409, "User already exists with this username or email");
  }

  const user = await userModel.create({
    username, email, password,
  })
});

const loginUser = asyncHandler(async (req, res) => {
  const {} = req.body;
});

const logoutUser = asyncHandler(async (req, res) => {
  const {} = req.body;
});

const sendAccountVerificationOTP = asyncHandler(async (req, res) => {
  const {} = req.body;
});

const verifyAccount = asyncHandler(async (req, res) => {
  const {} = req.body;
});

const sendForgotPasswordOTP = asyncHandler(async (req, res) => {
  const {} = req.body;
});

const verifyForgotPasswordOTP = asyncHandler(async (req, res) => {
  const {} = req.body;
});

const forgotPassword = asyncHandler(async (req, res) => {
  const {} = req.body;
});

const resetPassword = asyncHandler(async (req, res) => {
  const {} = req.body;
});
