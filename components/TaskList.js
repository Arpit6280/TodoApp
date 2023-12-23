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
  const deleteHandler = () => {
    let name = props.name;

    props.onDeleteTask(name);
  };
  console.log(props.task);
  return (
    <>
      {!props.completed ? (
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
            <button onClick={deleteHandler}>Delete</button>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TaskList;
