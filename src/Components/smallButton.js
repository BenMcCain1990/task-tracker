import '../Components/Styles/smallButton.css';

const smallButton = ({ onPress }) => {
    return (
        <div className='small-button'>
            <button onClick={onPress}>Add</button>
        </div>
    );
}

export default smallButton;