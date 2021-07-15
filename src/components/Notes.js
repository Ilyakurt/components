import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const Notes = ( props ) => {

    const detailHandler = () => {
        props.setActiveCard(props.item);
        props.setDialogState(true);
    }

    return(
        <div className="note">
            <div className="note-topbar">
                <DeleteForeverOutlinedIcon onClick={() => props.removeCard(props.item)}/>
            </div>
            <div className="note-body" onClick={detailHandler}>
                <div className="title">{props.item.text}</div>
                <div className="description">{props.item.description}</div>
                <div className="url">{props.item.url}</div>
                <div className="date">{props.item.date}</div>
            </div>
        </div>
    );
}

export default Notes;