import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
    <li key={task.id}>
      <TaskItem id={task.id} name={task.name} onDelete={props.onDelete} />
    </li>
  ));

  return (
    <div className={classes.taskList}>
      {tasks.length > 0 && <ul>{tasks}</ul>}
    </div>
  );
};

export default TaskList;
