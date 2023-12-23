import React, { useState } from "react";
import TaskList from "./TaskList";

function TodayTask(props) {
  const { tasks } = props;
  const onAddTask = (task) => {
    console.log(task);
    props.onAddTask(task);
  };
  const onDeleteTask = (name) => {
    props.onDeleteTask(name);
  };
  console.log(tasks);
  console.log("k");
  return (
    <div>
      <h3>Today</h3>
      {tasks.map((task) => (
        <TaskList
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          description={task.description}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TodayTask;
