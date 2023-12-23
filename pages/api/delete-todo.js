import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://arpitsinghyadav19:Arpit6280@cluster0.ukwpzd9.mongodb.net/test?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todoCollection = db.collection("todo");
    let name = data;
    // let id = new ObjectId(meetupId);
    const result = await todoCollection.deleteOne({ name: name });

    client.close();
    res.status(201).json({ message: "Todo Deleted" });
  }
}
export default handler;
