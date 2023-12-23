import Head from "next/head";
import TaskForm from "../components/TaskForm";
import TodayTask from "../components/TodayTask";
import { MongoClient } from "mongodb";
// import styles from '../styles/Home.module.css'

function Home(props) {
  return (
    <div>
      <TodayTask tasks={props.tasks} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://arpitsinghyadav19:Arpit6280@cluster0.ukwpzd9.mongodb.net/test?retryWrites=true&w=majority"
  );

  const db = client.db();
  const todoCollection = db.collection("todo");
  const todos = await todoCollection.find().toArray();
  client.close();
  console.log(todos);

  return {
    props: {
      tasks: todos.map((todo) => ({
        name: todo.name,
        description: todo.description,
        id: todo._id.toString(),
      })),
    },
  };
}

export default Home;