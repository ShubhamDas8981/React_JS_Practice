import mongoose from "mongoose";

const Connection = async() =>{
    const URL = ``;
    try{
        await mongoose.connect(URL)
        console.log("DB Connected")
    }catch(error){
        console.log("Error While Connecting Database", error)
    }
}

export default Connection
