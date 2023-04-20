import '../Components/Styles/taskCard.css';

function taskCard( { item, deleteItem, moveToInProgress } ) {


    return (
        <div className='task-card'>
                <div className='task-name'>
                <h1>{ item.value }</h1>
                </div>
                <div className='task-buttons'>
                <button onClick={ () => moveToInProgress(item.id) } className='move-button'><i class="uil uil-arrow-from-right"></i></button>
                <button onClick={ () => deleteItem(item.id) } className='delete-button'><i class="uil uil-trash"></i></button>
            </div>
        </div>
    );
}

export default taskCard;