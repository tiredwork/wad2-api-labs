import React, { useState } from "react";
import { addTask } from "../api/tasky-api";

const AddTaskForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "low",
  });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const tasks = props.taskState.tasks ? [...props.taskState.tasks] : [];
    const newTask = await addTask(formState);
    tasks.push(newTask);
    props.setTaskState({ tasks });

    setFormState({
      title: "",
      description: "",
      deadline: "",
      priority: "low",
    });
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>
          Task title:
          <input
            type="text"
            name="title"
            value={formState.title}
            required
            onChange={formChangeHandler}
          />
        </label>
        <br />
        <label>
          Due date:
          <input
            type="date"
            name="deadline"
            value={formState.deadline}
            required
            onChange={formChangeHandler}
          />
        </label>
        <br />
        <label>
          Details:
          <input
            type="text"
            name="description"
            value={formState.description}
            onChange={formChangeHandler}
          />
        </label>
        <br />
        <label>
          Priority:
          <select
            name="priority"
            value={formState.priority}
            onChange={formChangeHandler}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTaskForm;
