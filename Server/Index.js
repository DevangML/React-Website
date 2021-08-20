const express = require("express");
const app = express();

app.get("/contact", (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log("error in contact form")
      return res.json({error: "Please fill the contact form"})
    }
    else(
      document.write(req.body)
    )
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log(`Server is listening at port 8000`);
});
