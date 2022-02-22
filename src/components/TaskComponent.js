function TaskComponent({showTasks}) {
    return (
    <div className="container">

    <div className="big-label-container">Your Tasks</div>
    
    <div className="tasks-container">
      {showTasks()}
    </div>
    
    </div>
    )
}


export default TaskComponent;

