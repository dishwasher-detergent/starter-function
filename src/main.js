import { Client, Databases, ID } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  return res.json({"test": "test"}, 400)
};