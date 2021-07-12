import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    number: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
      number: ''
    });
  };
  

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}  
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
        <p></p>
        {todo.description}
        <p></p>
        {todo.url}
        <p></p>
        {todo.date}
      </div>
      <div className='icons'>
        <DeleteForeverOutlinedIcon
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <EditSharpIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text, description: todo.description, url: todo.url })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
