import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb+srv://arpitsinghyadav19:Arpit6280@cluster0.ukwpzd9.mongodb.net/test?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todoCollection = db.collection("todo");
    let name = data.name;
    // let id = new ObjectId(meetupId);
    const result = await todoCollection.updateOne(
      { name: name },
      { $set: { ...data } }
    );
    console.log(result);

    client.close();
    res.status(201).json({ message: "Todo Updated" });
  }
}
export default handler;
