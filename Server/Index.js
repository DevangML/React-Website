const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/contact", (req,res) => {
console.log(req.body.name);
console.log(req.body.email);
console.log(req.body.phone);
console.log(req.body.message);
let a = {
  name: req.body.name,
  email: req.body.email,
  phone: req.body.phone,
  message: req.body.message
}
});


const PORT = 8080;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}.`);
});


