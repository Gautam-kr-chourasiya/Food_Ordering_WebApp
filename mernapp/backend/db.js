const mongoose = require("mongoose");
const mongoURI =
  "mongodb://Jet_Meal:mern123@ac-8shz84n-shard-00-00.jw0ihmn.mongodb.net:27017,ac-8shz84n-shard-00-01.jw0ihmn.mongodb.net:27017,ac-8shz84n-shard-00-02.jw0ihmn.mongodb.net:27017/jet_foodmern?ssl=true&replicaSet=atlas-ukgksx-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected successfully");
        const fetched_data = await mongoose.connection.db.collection(
          "fooditems"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategory"
          );
          foodCategory.find({}).toArray( async function (err, catData) {
            if (err) console.log(err);
            else {
              global.fooditems = data;
              global.foodCategory = catData;

            }
          });
          // if(err) console.log(err);
          // else{
          //     global.fooditems = data;

          // }
        });
      }
    });
};

module.exports = mongoDB;
