import React, { useState } from 'react';
import Notes from './Notes';
//import AddIcon from '@material-ui/icons/Add';
//import CardDetail from './NotesForm';
//import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';
import NotesForm from './NotesForm';

function NotesList() {
    const [todos, setTodos] = useState([]);
    const [dialogState, setDialogState] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    const onSubmit = ( data ) => {
        const foundIndex = todos.findIndex(item => item.id === data.id);
        if (foundIndex !== -1) {
            console.log(data.id)
            setTodos(todos.map(item => (item.id === data.id ? data : item)))
        } else {
            const tempArr = todos;
            tempArr.push(data);
            setTodos(tempArr);
        }
    };

    const removeCard = item => {
        
        const removedArr = todos.filter(todo => todo.id !== item.id);
        setTodos(removedArr);
    }

    return (
    <>   
        <h1>Notes</h1>      
        <div className="shop-body">
            <div>
                <button onClick={() => setDialogState(true)} >
                    <AddBoxIcon/>
                </button>
                <NotesForm
                    dialogState={dialogState}
                    setDialogState={setDialogState}
                    item={activeCard}
                    onSubmit={onSubmit}
                />
            </div>
            <div className="grid">
                {
                todos.map(item => (
                <Notes
                    key={item.id}
                    setTodos={setTodos}
                    item={item}
                    setActiveCard={setActiveCard}
                    removeCard={removeCard}
                    setDialogState={setDialogState}
                />)) }
            </div>
        </div>
    </>
    );
}

export default NotesList;