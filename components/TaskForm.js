import React, { useState } from "react";
import styles from "./TaskForm.module.css";

function TaskForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let task = {
      name,
      description,
      completed: false,
    };
    setName("");
    setDescription("");
    props.onAddTask(task);
  };

  return (
    <div className={styles.form_container}>
      {/* <TodayTask tasks={tasks} /> */}
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <input
            type="text"
            placeholder="Task Name"
            value={name}
            onChange={nameHandler}
          />
        </div>
        <div className={styles.control}>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={descriptionHandler}
          />
        </div>
        <div className={styles.action}>
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
