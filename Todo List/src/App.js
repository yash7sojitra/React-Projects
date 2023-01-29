import { useState } from "react";
import ConfirmModal from "./Components/ConfirmModal";
import ErrorTask from "./Components/ErrorTask";
import InputTask from "./Components/InputTask";
import TaskList from "./Components/TaskList";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const addTaskToListHandler = (task) => {
    setTaskList((prevTask) => {
      return [...prevTask, task];
    });
  };

  const removeTaskFromListHandler = (id) => {
    setTaskList((prevTask) => {
      return prevTask.filter((prevTask) => prevTask.id !== id);
    });
  };

  const deleteAllTaskHandler = () => {
    setShowDeleteModal(true);
  };

  let DeleteButton = undefined;

  if (taskList.length > 0) {
    DeleteButton = (
      <div className="deleteBtn">
        <button onClick={deleteAllTaskHandler}>Delete All</button>
      </div>
    );
  }
  const ErrorHandler = () => {
    setHasError(true);
    setTimeout(() => {
      setHasError(false);
    }, 2000);
  };

  let modal;

  if (showDeleteModal) {
    modal = (
      <ConfirmModal
        ondisprove={() => {
          setShowDeleteModal(false);
        }}
        onConfirm={() => {
          setTaskList([]);
          setShowDeleteModal(false);
        }}
      />
    );
  }

  return (
    <>
      {modal}
      <h1>Todo List</h1>
      <InputTask onAddTask={addTaskToListHandler} onError={ErrorHandler} />
      <TaskList tasks={taskList} onDelete={removeTaskFromListHandler} />
      {taskList.length === 0 && <div className="msg">No task added!</div>}
      {DeleteButton}
      {hasError && <ErrorTask />}
    </>
  );
};

export default App;
