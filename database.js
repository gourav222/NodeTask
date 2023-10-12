import mongoose from "mongoose";

const connectDatabase = async () => {
    try{
        await mongoose.connect("mongodb+srv://gourav:gourav@cluster0.fzr9uuj.mongodb.net/");
        console.log("Successfully connected to the database")
    }
    catch(error){
        console.log("Not Connected",error);
    }
}

export default connectDatabase;