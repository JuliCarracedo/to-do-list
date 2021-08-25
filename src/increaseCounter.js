let taskCounter = 1;
const increaseCounter = () => {
  const res = taskCounter;
  taskCounter += 1;
  return res;
};

export default increaseCounter;