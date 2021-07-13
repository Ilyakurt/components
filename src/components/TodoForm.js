import React, { useState, useEffect, useRef } from 'react';
import {v4 as uuidv4} from 'uuid';

function TodoForm(props) {
  const [inputTitle, setInputTitle] = useState(props.edit ? props.edit.value : '');
  const [inputDescription, setInputDescription] = useState(props.edit ? props.edit.description   : '');
  const [inputUrl, setInputUrl] = useState(props.edit ? props.edit.url : '');

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = e => {
    setInputTitle(e.target.value);
  };

  const DescriptionChange = e => {
    setInputDescription(e.target.value);
  };

  const UrlChange = e => {
    setInputUrl(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    var today = new Date(Date.now());
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var hour = Math.floor((Date.now() / (1000*60*60)) % 24 + 3);
    var minutes = Math.floor((Date.now() / (1000 * 60)) % 60);
    var seconds = Math.floor((Date.now() / 1000) % 60); 

    today = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + minutes + ':' + seconds;

    props.onSubmit({
      id: uuidv4(),
      text: inputTitle,
      description: inputDescription,
      url: inputUrl,
      date: today
      
    });

    setInputTitle('');
    setInputDescription('');
    setInputUrl('');
    
  };

  return (
    
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>  
          <input
            placeholder='Update your title'
            value={inputTitle}
            onChange={handleChange}
            name='text'
            //Sref={inputRef}
            className='todo-input edit'
          />
            <input
            placeholder='Update your description'
            value={inputDescription}
            onChange={DescriptionChange}
            name='description'
            //ref={inputRef}
            className='todo-input edit'
          />
            <input
            placeholder='Update your url'
            value={inputUrl}
            onChange={UrlChange}
            name='url'
            //ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a title'
            value={inputTitle}
            onChange={handleChange}
            name='text'
            className='todo-input'
            // ref={inputRef}
          />
            <input
            placeholder='Add a description'
            value={inputDescription}
            onChange={DescriptionChange}
            name='description'
            className='todo-input one'
            // ref={inputRef}
            
          />
            <input
            placeholder='Add a url'
            value={inputUrl}
            onChange={UrlChange}
            name='url'
            className='todo-input two'
            // ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
