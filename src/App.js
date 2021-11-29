import { useRef,useState } from 'react';
import { actions, useStore } from './store';

function App() {
  const [canEdit, setCanEdit] = useState(false);
  const [indexToChange, setIndexToChange] = useState(0);
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();
  console.log(state);

  const handleAddTodo = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(''));
    inputRef.current.focus();
  }
  const handleEditTodo = (index) => {
    dispatch(actions.setTodoInput(todos[index]));
    setIndexToChange(index);
    setCanEdit(true);
    inputRef.current.focus();
  }
  const handleChangeTodo = () => {
    console.log(indexToChange);
    dispatch(actions.changeTodo({todoInput,indexToChange}))
    dispatch(actions.setTodoInput(''));
    inputRef.current.focus();
    setCanEdit(false);
  }
  return (
    <div>
      <input
        ref={inputRef}
        value={state.todoInput}
        placeholder="Enter Todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      {canEdit ? (
        <button onClick={handleChangeTodo}>Change</button>
      ) : (
        <button onClick={handleAddTodo}>ADD</button>
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span onClick={() => dispatch(actions.deleteTodo(index))}> &times;   </span>
            <button onClick={() => handleEditTodo(index) }>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
