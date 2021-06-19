import express from "express";

const app = express();

// Midleware
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.listen(3333, () => console.log("Init Server on http://localhost:3333"));
