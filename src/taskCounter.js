const taskCounter = () => {
  let taskCounter = 1;
  if (localStorage.getItem('list') == null) {
    taskCounter = 4;
  }

  return taskCounter;
};

export default taskCounter;