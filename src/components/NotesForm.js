import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {v4 as uuidv4} from 'uuid';

const CardDetail = ( props ) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const [editedItem, setEditedItem] = useState();
    
    useEffect(() => {
        setEditedItem(props.item);
        setInputTitle(props.item?.text);
        setInputDescription(props.item?.description);
        setInputUrl(props.item?.url);
        }, [props.item]
      );

    const titleHandler = e => {
        setInputTitle(e.target.value)
    };
    const descriptionHandler = e => {
        setInputDescription(e.target.value)
    };
    const urlHandler = e => {
        setInputUrl(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        var today = new Date(Date.now());
        var hour = Math.floor((Date.now() / (1000*60*60)) % 24 + 3);
        var minutes = Math.floor((Date.now() / (1000 * 60)) % 60);
        var seconds = Math.floor((Date.now() / 1000) % 60); 
    
        today = hour + ':' + minutes + ':' + seconds;

        props.onSubmit(
            {
                id: editedItem ? editedItem.id : uuidv4(), 
                text: inputTitle, 
                description: inputDescription, 
                url: inputUrl, 
                date: editedItem ? editedItem.date : today
            }
        )

        setInputTitle("")
        setInputDescription("")
        setInputUrl("")
        setEditedItem(null);

        props.setDialogState(false);

    };

    return (
        <Dialog
                open={props.dialogState}
                onClose={() => props.setDialogState(false)}
            >
                <DialogTitle id="alert-dialog-title">{"Notes Details"} </DialogTitle>
                <DialogContent className="save">
                    <DialogContentText id="alert-dialog-description" className="">
                        <div className="todo-input">
                           
                            <input 
                                placeholder='Add a title' 
                                onChange={titleHandler} 
                                type="text" 
                                className="form-control" 
                                value={inputTitle}/>
                        </div>
                        <div className="todo-input">
                            <input 
                                placeholder='Add a description'
                                onChange={descriptionHandler} 
                                className="form-control" 
                                value={inputDescription}/>
                        </div>
                        <div className="todo-input">
                            <input 
                                placeholder='Add a Url'
                                onChange={urlHandler} 
                                type="text" 
                                className="form-control" 
                                value={inputUrl}/>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                    <Button onClick={() => props.setDialogState(false)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
    );
}

export default CardDetail;