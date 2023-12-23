import React from "react";
import CompleteTask from "./CompleteTask";

function CompleteList(props) {
  const { tasks } = props;
  return (
    <div>
      {tasks.map((task) => (
        <CompleteTask
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          description={task.description}
        />
      ))}
    </div>
  );
}

export default CompleteList;
