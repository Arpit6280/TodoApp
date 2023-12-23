import React from "react";
import styles from "./TaskList.module.css";

function TaskList(props) {
  const checkStatusHandler = () => {
    let task = {
      id: props.id,
      name: props.name,
      description: props.description,
      completed: true,
    };
    props.onAddTask(task);
  };
  console.log(props.task);
  return (
    <div className={styles.lists}>
      <section className={styles.tasks}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onClick={checkStatusHandler}
        />
        <p>{props.name}</p>
      </section>
      <section>
        <button>Delete</button>
      </section>
    </div>
  );
}

export default TaskList;
