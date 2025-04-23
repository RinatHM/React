import { useState } from "react";
import Button from '@mui/material/Button';

function Counter() {
    const [count, setCount] = useState(5);
    const updateCount = () => {
        setCount(count + 1);
    }
    const DownCount = () => {
        if (count ===  0)
        return;
        setCount(count - 1);
    }


    return (
        <div>
        <Button onClick={updateCount} variant="contained">click + 1</Button><br/>
            <span>{count}</span><br/>
        <Button onClick={DownCount} variant="contained">click - 1</Button><br/>

        </div>
    )
}

export default Counter;