// const express = require("express");
// const connectToMongo = require("./db");
// const cors = require("cors");
// const app = express();
// connectToMongo();
// const Port = 8001;
// app.use(express.json());
// app.use(cors());

// //  Available Routes

// app.listen(Port, () => {
//   console.log(`Connected to http://localhost:${Port}`);
// });

const express = require("express");
const connectToMongo = require("./db");

connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

// Available api routes
app.use("api/form", require("./routes/form"));

//connect to localhost

app.listen(port, () => {
  console.warn(`Connected to app at http://localhost:${port} successfully`);
});
