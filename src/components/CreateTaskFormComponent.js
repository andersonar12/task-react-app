function CreateTaskFormComponent({addTask,task,setTask,editId}) {

    return (
        <div className="add-task-container">
        <form onSubmit={addTask} className="add-task-form">
          <input value={task} onChange={(e) => setTask(e.target.value)} className="input-task-title" type="text" placeholder="Write something to create a task" />
          <button className="button-create-task" type="submit">{editId ? "Edit Task" : "Add Task"}</button>
        </form>
        </div>
    )
}

export default CreateTaskFormComponent;

