const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "MONGOURI";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })

    .then((client) => {
      console.log("Connected!");
      _db = client.db("shop");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
