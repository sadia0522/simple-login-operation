const express = require("express");
const app = express();
const appRoute = require('./app');
const DBconection = require('./src/config/dbConnect');
const { PORT } = require("./src/config/envconfig");


app.use(express.json());
DBconection();
app.use("/api",appRoute);

app.listen(PORT, () => {
  console.log(`server is  running ${PORT}`);
});
