import React, { useState, useCallback} from 'react';

const Parent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <Child handleClick={handleClick} />
            <p>Count: {count}</p>
        </div>
    );
};

interface ChildProps {
    handleClick: () => void;
}

const Child: React.FC<ChildProps> = ({ handleClick }) => {
    return <button onClick={handleClick}>Click me</button>;
};

export default Parent;