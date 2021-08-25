import addTodo from '../src/addTodo';
import increaseCounter from '../src/increaseCounter';

jest.mock('../__mocks__/LStorage.js');

describe('testing add item to a todo list', () => {
  test('add todo', () => {
    increaseCounter();
    let taskCounter;
    expect(addTodo()).toBe(1);
  });
});