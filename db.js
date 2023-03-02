const { MongoClient, ObjectId } = require("mongodb");
 
let singleton;
 
async function connect() {
    if (singleton) return singleton;
 
    //const client = new MongoClient(process.env.MONGO_HOST_ATLAS);
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();
 
    singleton = client.db(process.env.MONGO_DATABASE_ATLAS);
    //singleton = client.db(process.env.MONGO_DATABASE);
   

    
    

    return singleton;
}

const COLLECTION = "tecnicas_tag";
 
async function findAll() {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
}

async function findOne(id) {
    
    const db = await connect();
    return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

async function findExpressao(filtro) {    

    const db = await connect();

    const expressaoregular = [];
    for (const chave in filtro) {
        expressaoregular[chave] = new RegExp(filtro[chave], "i");
      }
    
      console.log(expressaoregular);

    return db.collection("tecnicas_tag").find( { tags: { $all: expressaoregular } } ).toArray();    
        
}

async function insert(COLLECTION, item) {
    const db = await connect();
    return db.collection(COLLECTION).insertOne(item);
}

async function deleteOne(COLLECTION, id) {
    const db = await connect();
    return db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
}

async function update(id, customer) {
    const db = await connect();
    return db.collection(COLLECTION).updateOne({ _id: new ObjectId(id) }, { $set: customer });
}

module.exports = { findAll, insert, findOne, update }

module.exports = { findAll, insert, findOne, deleteOne }