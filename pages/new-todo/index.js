import TaskForm from "../../components/TaskForm";

function NewTodoPage() {
  async function addTodoHandler(todo) {
    console.log(todo);

    const response = await fetch("/api/new-todo", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <TaskForm onAddTask={addTodoHandler} />
    </div>
  );
}
export default NewTodoPage;
