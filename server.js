const express = require("express");
const topicsRoute = require("./routes/topics");

const app = express();
const PORT = 3000;

app.use("/api/topics", topicsRoute);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
