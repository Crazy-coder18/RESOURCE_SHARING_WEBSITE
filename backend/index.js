const express=require("express");
const ConnectToMongo=require("./db/connect")
const app=express();
app.use(express.json());
const cors=require("cors")
app.get("/",(req,res
)=>{
    res.send("hello world");
})
app.use(cors())
app.use("/api/auth",require("./routes/auth"));
app.use("/api/item",require("./routes/itemauth"))
const port=5000;
ConnectToMongo();
app.listen(port,()=>{
    console.log(`rsw runnnig at http://localhost:${port}`);
    
})