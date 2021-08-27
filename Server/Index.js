const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/contact",urlencoded, (req,res) => {
console.log(req.body);
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}.`);
});


