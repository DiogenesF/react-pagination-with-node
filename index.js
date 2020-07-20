const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
connectDB();

const postsRouter = require("./routes/posts");

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/posts", postsRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
