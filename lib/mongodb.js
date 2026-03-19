import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri && process.env.NODE_ENV !== "test") {
  console.warn("MONGODB_URI is not defined. MongoDB helpers will fall back to default data.");
}

let cachedClientPromise;
let cachedClient;

export async function getMongoClient() {
  if (cachedClient) {
    return cachedClient;
  }

  if (cachedClientPromise) {
    cachedClient = await cachedClientPromise;
    return cachedClient;
  }

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  const client = new MongoClient(uri);
  cachedClientPromise = client.connect();
  cachedClient = await cachedClientPromise;
  return cachedClient;
}

export async function connectToDatabase() {
  const client = await getMongoClient();
  const dbName = process.env.MONGODB_DB;
  return dbName ? client.db(dbName) : client.db();
}
