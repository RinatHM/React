import React, { useState } from "react";

function Show({data}) {
    const [block, setBlock] = useState();

    const blockShow = () => {
        setBlock(!block);
    }

    return ( 
        <div>
            <button onClick={blockShow}>Показать или скрыть</button>
            <p style={{display: block ? 'block' : "none"}}>{data}</p>
        </div>
     );
}

export default Show;

