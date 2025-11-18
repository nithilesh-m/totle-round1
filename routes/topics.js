const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  const { search, sort } = req.query;

  try {
    const filePath = path.join(__dirname, "../data/topics.json");
    const rawData = fs.readFileSync(filePath, "utf8");
    const topics = JSON.parse(rawData);

    if (!search || search.trim() === "") {
      return res.status(400).json({ error: "Search query is required" });
    }

    const filtered = topics.filter(t =>
      t.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return res.status(200).json(filtered);

  } catch (error) {
    console.error("Error reading topics file:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
