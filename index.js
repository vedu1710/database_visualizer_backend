const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const productRouter = require("./routers/productRouter");
 


app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

app.use("/product", productRouter);
app.get("/",(req,res)=>{
res.send(' serveronline');
})

app.listen(port, ()=>{
    console.log("server started...");
});

