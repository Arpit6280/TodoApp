import React from "react";
import styles from "./TaskList.module.css";

function CompleteTask(props) {
  return (
    <>
      {props.completed ? (
        <div className={styles.lists}>
          <section className={styles.tasks}>
            <p>{props.name}</p>
          </section>
          <section>
            <button>Delete</button>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CompleteTask;
