import React, { useState } from "react";
import TaskList from "./TaskList";

function TodayTask(props) {
  const { tasks } = props;
  const onAddTask = (task) => {
    console.log(task);
    props.onAddTask(task);
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
          description={task.description}
          onAddTask={onAddTask}
        />
      ))}
    </div>
  );
}

export default TodayTask;
