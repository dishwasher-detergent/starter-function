import { Client, Databases, ID } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers["x-appwrite-key"]);

  const databases = new Databases(client);

  console.log(req)

  const body = req.bodyJson;
    
  try {
    const res = await databases.createDocument(
      "sample",
      "68a47889001b14e0eb8c",
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