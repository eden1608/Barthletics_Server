const mongodb = require('mongoose');
const MongoClient = mongodb.MongoClient ;



const mongoConnect = () => {
MongoClient.connect('mongodb+srv://eldad5900:eldad5900@barthletics.efe3zxk.mongodb.net/test', () => console.log("API Connected to MongoDB"));
const db = MongoClient.connection;
db.on("error", (error) => {
  console.log(error);
});
}

module.exports =mongoConnect;