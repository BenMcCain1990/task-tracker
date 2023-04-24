import '../Components/Styles/taskCard.css';

function taskCard( { item, children } ) {

    return (
        <div className='task-card'>
                <div className='task-name'>
                    <h1>{ item.value }</h1>
                </div>
                <div className='task-buttons'>
                    {children}
                </div>
        </div>
    );
}

export default taskCard;