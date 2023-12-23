import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://arpitsinghyadav19:Arpit6280@cluster0.ukwpzd9.mongodb.net/test?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todoCollection = db.collection("todo");

    const result = await todoCollection.findOneAndUpdate();
    console.log(result);

    client.close();
    res.status(201).json({ message: "Todo Inserted" });
  }
}
export default handler;
