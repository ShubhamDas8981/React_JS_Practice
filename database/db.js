import mongoose from "mongoose";

const Connection = async() =>{
    const URL = `mongodb+srv://shubhamdotin:${encodeURIComponent('vRmU2wcs7NX4MY5x')}@cluster0.5gu5il1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL)
        console.log("DB Connected")
    }catch(error){
        console.log("Error While Connecting Database", error)
    }
}

export default Connection
