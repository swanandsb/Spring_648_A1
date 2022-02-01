const express = require("express");
const app = express();
const ServerFunction = express.static("public");
app.use("/", ServerFucntion);
app.listen(3000, () => {
  console.log("Server started at Port 3000");
});
