const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
 


app.use(cors({ origin: ["http://localhost:3000", "https://frontend--demo.herokuapp.com/"] }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.get("/",(req,res)=>{
res.send(' serveronline');
});

app.get("/add", (req, res) => {
    console.log("request from client on add!!");
    res.send("you got a response from add at root");
  });

app.listen(port, ()=>{
    console.log("server started...");
});

