import { useState } from "react";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import classes from "./TaskList.module.css";

const TaskItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const deleteTaskHandler = () => {
    props.onDelete(props.id);
  };

  const editTaskHandler = () => {};

  const taskCompleteHandler = () => {
    if (!isCompleted) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  const taskItemClasses = isCompleted
    ? `${classes.taskItem} ${classes.completed}`
    : `${classes.taskItem}`;

  return (
    <div className={taskItemClasses} onClick={taskCompleteHandler}>
      <span className={classes.name}>{props.name}</span>
      <div className={classes.deleteEdit}>
        <span onClick={deleteTaskHandler}>
          <DeleteIcon />
        </span>
        <span onClick={editTaskHandler}>
          <EditIcon />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
