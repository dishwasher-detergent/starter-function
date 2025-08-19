import { Client, Databases, ID } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject("68a47889001b14e0eb8c")
    .setKey(req.headers["x-appwrite-key"]);

  const databases = new Databases(client);

  const body = req.bodyJson;
    
  try {
    const res = await databases.createDocument(
      process.env.DATABASE_ID,
      process.env.COLLECTION_ID,
      ID.unique(),
      body
    );

    console.log(`Response: ${JSON.stringify(res)}`);

  } catch (e) {
    console.log(e);

    return res.text("error");
  }

  return res.empty();
};