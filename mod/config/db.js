const mongoose=require("mongoose");
//  const mongoDb=require("mongodb").MongoClient;
const config=require("./config");

const dbURL=config.db.url;
// const uini={useUnifieldTopology:true}
mongoose
  .connect(dbURL )
  .then(()=>{

console.log("mongoBD altlas is connected");

}
)
  .catch( (error)=>{

    console.log(error);
    process.exit(1);


}
)