import React, { useState } from "react";

const Tutorial_usestate: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p> You clicked {count} times using state</p>
            <button onClick={() => setCount(count + 1)}>
                Clock me
            </button>
        </div>
    );

}

export default Tutorial_usestate;


