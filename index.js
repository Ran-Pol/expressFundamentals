const express = require("express");
const { nextTick } = require("process");

const app = express();

app.use((req, res, next) => {
  console.log("Pass throught here!");
  next();
});

app.use((req, res, next) => {
  if(req.query.login==="jordan"){
      next()
  }else{
      res.send("Not authorized page!")
  }
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/dashboard", (req,res)=>{
    res.send("Inside the dashboard!")
})

app.listen(3000);
console.log(`Server on port ${3000}`);
