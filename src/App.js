import React, { useEffect, useState } from 'react';
import './App.css';
import SmallButton from './Components/smallButton';
import TaskCard from './Components/taskCard';
import Input from './Components/input';
import Clock from './Components/clock';

function App() {

//State hooks, intializing to local storage.
const [ newItem, setNewItem ] = useState('');
const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('items')) || []);
const [ inProgressItems, setInProgressItems ] = useState(JSON.parse(localStorage.getItem('inProgressItems')) || []);
const [ completedItems, setCompletedItems ] = useState(JSON.parse(localStorage.getItem('completedItems')) || []);


//Saving tasks to local storage.
useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items));
}, [items]);
useEffect(() => {
    window.localStorage.setItem('inProgressItems', JSON.stringify(inProgressItems));
}, [inProgressItems]);
useEffect(() => {
    window.localStorage.setItem('completedItems', JSON.stringify(completedItems));
}, [completedItems]);


//Add New Item
function addItem() {

    if (!newItem) {
        alert('Please enter a task.');
        return;
    }

    const item = {
        id: Math.floor(Math.random() * 100000),
        value: newItem
    };

    setItems(oldList => [...oldList, item]);

    setNewItem('');
}

//Delete New Item
function deleteNewItem( id ) {
    const newArray = items.filter( ( item ) => item.id !== id);
    setItems(newArray);
};

//Delete In Progress Item
function deleteInProgressItem( id ) {
    const newItemArray = inProgressItems.filter( ( item ) => item.id !== id);
    setInProgressItems(newItemArray);
};
//Delete Completed Item
function deleteCompletedItem( id ) {
    const newItemArray = completedItems.filter( ( item ) => item.id !== id);
    setCompletedItems(newItemArray);
};

//Move Item from 'To Do' to 'In Progress'. Handler Function
function handleInProgress(id) {
    const inProgressItem = items.find(item => item.id === id);
    setInProgressItems(oldList => [...oldList, inProgressItem]);
    deleteNewItem(id);
}
//Move Item from In Progress to Complete
function handleComplete(id) {
    const completedItem = inProgressItems.find(item => item.id === id);
    setCompletedItems(oldList => [...oldList, completedItem]);
    deleteInProgressItem(id);
}

return (
    <div className='App'>
        <div className='header-container'>
            <div className='title-container'>
                <div className="title-body">
                    <h1 className='title'>Task Tracking Board</h1>
                    <div className='input-container'>
                        <Input 
                            value={ newItem }
                            onEdit={ e => setNewItem(e.target.value)}
                            newItem={ newItem }
                        />
                        <SmallButton onPress={ () => addItem() } />
                    </div>
                </div>
                <div className='title-span'></div>
            </div>
            <div className='clock-container'>
                <Clock />
            </div>
        </div>
        <div className='body-container'>
                <div className='board-container'>
                    <div className='board-title'>
                        <h1>To Do</h1>
                        <h1>{items.length}</h1>
                    </div>
                    <div className='board-span'></div>
                    <div className='board-body'>
                        { items.map(item => {
                            return(
                            <TaskCard key={item.id} item={ item }>
                                <button onClick={ () => handleInProgress(item.id)} className='move-button'><i class='uil uil-arrow-from-right'></i></button>
                                <button onClick={ () => deleteNewItem(item.id)} className='delete-button'><i class='uil uil-trash'></i></button>
                            </TaskCard>
                            ) 
                        })}
                    </div>
                </div>
                <div className='board-container'>
                    <div className='board-title'>
                        <h1>In Progress</h1>
                        <h1>{inProgressItems.length}</h1>
                    </div>
                    <div className='board-span'></div>
                    <div className='board-body'>
                        { inProgressItems.map(item => {
                            return(
                                <TaskCard key={item.id} item={ item }>
                                    <button onClick={ () => handleComplete(item.id)} className='move-button'><i class='uil uil-arrow-from-right'></i></button>
                                    <button onClick={ () => deleteInProgressItem(item.id)} className='delete-button'><i class='uil uil-trash'></i></button>
                                </TaskCard>
                            )
                        })}
                    </div>
                </div>
                <div className='board-container'>
                    <div className='board-title'>
                        <h1>Complete</h1>
                        <h1>{completedItems.length}</h1>
                    </div>
                    <div className='board-span'></div>
                    <div className='board-body'>
                    { completedItems.map(item => {
                            return(
                                <TaskCard key={item.id} item={ item } deleteItem={deleteCompletedItem}>
                                    <button onClick={ () => deleteCompletedItem(item.id)} className='delete-button'><i class='uil uil-trash'></i></button>
                                </TaskCard>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
