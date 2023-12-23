import Head from "next/head";
import TaskForm from "../components/TaskForm";
import TodayTask from "../components/TodayTask";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
// import styles from '../styles/Home.module.css'

function Home(props) {
  const router = useRouter();
  const onAddTask = async (task) => {
    console.log(task);
    const response = await fetch("/api/complete-todo", {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const onDeleteTask = async (name) => {
    console.log(name);
    const response = await fetch("/api/delete-todo", {
      method: "DELETE",
      body: JSON.stringify(name),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
  };
  return (
    <div>
      <TodayTask
        tasks={props.tasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
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
        completed: todo.completed,
      })),
    },
  };
}

export default Home;
