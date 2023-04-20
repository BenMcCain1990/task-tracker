import '../Components/Styles/clock.css';
import { useState, useEffect } from 'react';


function Clock() {

    const [ date, setDate ] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);


    return (
        <div className='clock'>
            {date.toLocaleTimeString('en-US')}
        </div>
    );
}

export default Clock;