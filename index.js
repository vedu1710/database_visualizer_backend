const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const productRouter = require("./routers/productRouter");
 


app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

app.use("/product", productRouter);

app.listen(port, ()=>{
    console.log("server started...");
});
