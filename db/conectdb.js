import mongoose from "mongoose";

try{
  await mongoose.connect(process.env.DB_URI+process.env.DB_NAME,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  console.log("DB Found and conected")

}catch(err){
  console.log("something went wrong: " +err)
}