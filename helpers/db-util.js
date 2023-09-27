//connecting with mongoDB
// Import the MongoClient class from the 'mongodb' library
import { MongoClient } from "mongodb";

// This function is for establishing a connection to the MongoDB database.
export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://MmaseroleKobue:1707Kobue@cluster0.yz8ilzv.mongodb.net/events?retryWrites=true&w=majority"
  );
  // Return the MongoClient instance, which represents the connection to the database
  return client;
}

// This function is for inserting a document (record) into a MongoDB collection.
export async function insertDocument(client, collection, document) {
   const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  // Return the result of the insertion operation
  return result;
}

// This function is for retrieving all documents from a MongoDB collection and optionally sorting them.
export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
