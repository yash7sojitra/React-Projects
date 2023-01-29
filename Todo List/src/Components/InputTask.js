import { useState } from "react";
import Button from "../UI/Button";
import "./InputTask.css";

const InputTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  // const [isTouched, setIsTouched] = useState();
  const [isInvalid, setIsInvalid] = useState(false);

  const inputTaskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const focusHandler = () => {
    setIsInvalid(false);
  };

  const inputTaskBlurHandler = () => {
    if (isInvalid) {
    }
  };

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (enteredTask.trim().length === 0) {
      setIsInvalid(true);
      props.onError();
      return;
    } else {
      setIsInvalid(false);
    }

    props.onAddTask({
      id: Math.random().toString(),
      name: enteredTask,
    });

    setEnteredTask("");
  };

  const taskInputClasses = isInvalid ? "taskForm invalid" : "taskForm";

  return (
    <form onSubmit={addTaskHandler} className={taskInputClasses}>
      <input
        type="text"
        value={enteredTask}
        onFocus={focusHandler}
        placeholder="Enter your task"
        onChange={inputTaskChangeHandler}
        onBlur={inputTaskBlurHandler}
      />
      <Button name="Add" />
    </form>
  );
};

export default InputTask;
