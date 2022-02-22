import "./App.css";
import React, { useState } from "react";
import TaskComponent from "./components/TaskComponent";
import CreateTaskFormComponent from "./components/CreateTaskFormComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  // We define three states: One for current task, one for all tasks and one whether we want to edit a task or not
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState("");
  const [editId, setEditId] = useState(0);

  // Function to add a task
  const addTask = (e) => {
    e.preventDefault();

    // If we are in edit mode, editId will exist
    if (editId) {
      const taskToBeEdited = tasks.find((taskElt) => taskElt.id === editId);
      const updatedTasksList = tasks.map((taskElt) =>
        taskElt.id === taskToBeEdited.id
          ? (taskElt = { id: taskToBeEdited.id, taskTitle: task })
          : {
              id: taskElt.id,
              taskTitle: taskElt.taskTitle,
            }
      );

      setTasks(updatedTasksList);
      setEditId(0);
      setTask("");
      return;
    }

    // We create a new task
    if (task !== "") {
      setTasks([{ id: `${task}-${Date.now()}`, taskTitle: task }, ...tasks]);
      setTask("");
    }
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const tasksAfterDeletingItem = tasks.filter((item) => item.id !== id);
    setTasks([...tasksAfterDeletingItem]);
  };

  // Function to enter the edit mode
  const editTask = (id) => {
    const taskToBeEdited = tasks.find((taskElement) => taskElement.id === id);
    setTask(taskToBeEdited.taskTitle);
    setEditId(id);
  };

  // Function to show all the tasks
  const showTasks = () => {
    if (tasks.length > 0) {
      return tasks.map((taskItem) => (
        <div key={taskItem.id} className="task">
          <ul>
            <li>
              <span key={taskItem.id} className="task-title">
                {taskItem.taskTitle}
              </span>
              <button onClick={() => editTask(taskItem.id)} className="button-edit-task">
                <i className="material-icons button-edit-task-icon">edit</i>
              </button>
              <button onClick={() => deleteTask(taskItem.id)} className="button-delete-task">
                <i className="material-icons button-delete-task-icon">delete</i>
              </button>
            </li>
          </ul>
        </div>
      ));
    } else {
      return <div className="notasks-label">You haven't created any tasks yet</div>;
    }
  };

  return (
    <div className="App">
      <HeaderComponent />
      <TaskComponent showTasks={showTasks} />
      <CreateTaskFormComponent addTask={addTask} task={task} setTask={setTask} editId={editId} />
    </div>
  );
}

export default App;
