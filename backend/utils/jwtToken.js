export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Set httpOnly to true
    secure: true,
    sameSite:"none",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();

//   const options = {
//     expires: new Date(
//       Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,      // protects from XSS
//     secure: true,        // REQUIRED for HTTPS (Vercel + Render)
//     sameSite: "none",    // REQUIRED for cross-domain cookies
//   };

//   res
//     .status(statusCode)
//     .cookie("token", token, options)
//     .json({
//       success: true,
//       user,
//       message,
//     });
// };
