import mongoose from "mongoose";

const Connection = async() =>{
    const URL = `mongodb+srv://anirband553:TvQ39DkCgdGTyrrW@cluster0.jcvas3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL)
        console.log("DB Connected")
    }catch(error){
        console.log("Error While Connecting Database", error)
    }
}

export default Connection
