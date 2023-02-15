const app = require("express")();
const cors = require("cors");
const fs = require("fs");
const { generateOTP } = require("./features");

app.use(cors());

// let data = {
//   records: [],
// };

const result = generateOTP(6);
console.log(result);

// function saveData(otp, data) {
//   data.records.push({ ...data, otp });
//   let jsonData = JSON.stringify(data);
//   fs.writeFile("./data/records.json", jsonData, "utf8", callback);
// }

app.get("/", (req, res) => {
  res.send("Express");
  //   res.send(generateOTP(6));
});

app.post("/user", (req, res) => {
  const OTP = generateOTP(6);
  //   saveData(OTP, req.body);
  res.send(OTP);
});

app.listen(3001, console.log("Server has started."));
