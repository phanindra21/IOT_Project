const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;



app.use(express.json());// routes
app.get("/", async (req, res) => {
  
});
app.post("/", async (req, res) => {
  
});
app.listen(PORT, () => console.log("Listening on port", PORT));