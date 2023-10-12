import connectDatabase from "./database.js";
import app from "./app.js";
import User from "./models/userSchema.js";
connectDatabase();

app.get("/", async (req, res) => {
  res.send("Working fine");
});

app.post("/register", async (req, res) => {
  try {
    console.log("#######");
    const response = await User.create(req.body);

    res.status(200).send(response);
  } catch (error) {
    console.log("@@@@@@", error);
  }
});

app.get("/getUser",async (req,res) => {
    try{
        const response = await User.find();
        res.status(201).send(response)
    }
    catch(error){
        console.log("error",error)
    }
})

app.get("/getUserById",async (req,res) => {
    try{
        const userEmail = req.query.email;
        const response = await User.findOne({email:userEmail});
        res.status(201).send(response)
    }
    catch(error){
        console.log("error",error)
    }
})

app.put('/update',async(req,res) => {
    try{
        const response = await User.findByIdAndUpdate(req.body.email,req.body);
        res.status(201).send(response)
    }
    catch(error){
        console.log("Updated Successfull",error);
    }
})

app.delete("/delete",async (req,res) => {
    try{
        let userId = req.body.id;
        const response = await User.findByIdAndDelete(userId); 
        res.status(201).send("User Deleted successfully",response)
    }
    catch(error){
        console.log("erroe",error);
    }
})

app.listen(3000, () => {
  console.log("App is running on PORT 3000");
});
