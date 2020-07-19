import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        { name: 'Dimych', id: 1 },
        { name: 'Sveta', id: 2 },
        { name: 'Petya', id: 3 },
        { name: 'Sasha', id: 4 },
        { name: 'Valera', id: 5 },
        { name: 'Masha', id: 6 },
    ];

    let messages= [
        { message: 'hi', id: 1 },
        { message: 'How is your IT-kamasutra', id: 2 },
        { message: 'YO', id: 3 },
        { message: 'YO', id: 4 },
        { message: 'YO', id: 5 },
        { message: 'YO', id: 6 },
    ];

    let dialogElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;