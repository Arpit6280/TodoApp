import React, { useState } from "react";
import TaskList from "./TaskList";

function TodayTask(props) {
  const { tasks } = props;
  console.log(tasks);
  console.log("k");
  return (
    <div>
      <h3>Today</h3>
      {tasks.map((task) => (
        <TaskList
          key={task.id}
          name={task.name}
          description={task.description}
        />
      ))}
    </div>
  );
}

export default TodayTask;
