import React, { useState, useEffect } from "react";

const Tutorial_useeffect: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;

        return () => {
            document.title = 'React App';
        };
    }, [count]);


    return (
        <div>
            <p> You clicked {count} times using effect</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )

}

export default Tutorial_useeffect;