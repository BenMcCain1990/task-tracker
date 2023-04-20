
import '../Components/Styles/input.css';

function Input({ onEdit, value }) {

    return (
        <div className='input-div'>
            <input onChange={onEdit} value={value} className='input'type='text' placeholder='Add New Task'></input>
        </div>
    );
}

export default Input;