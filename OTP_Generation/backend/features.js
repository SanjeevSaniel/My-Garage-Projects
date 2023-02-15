const generateOTP = (digits) => {
  const elements = "0123456789abcdefghijklmnopqrstuvwxyz";
  let otp = "";

  for (let index = 0; index < digits; index++) {
    otp += elements[~~(Math.random() * elements.length)];
  }

  return otp;
};

exports.generateOTP = generateOTP;
