const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fetchRoutes = require("./routes/fetchProjects");

const app = express();
app.use(cors());

app.use(express.json());

//Mongo DB connection

mongoose.connect(
  "mongodb+srv://murarisabhavath:Murari125@projectmanagement.ahu2glc.mongodb.net/Projects?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/fetch", fetchRoutes);

let PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
