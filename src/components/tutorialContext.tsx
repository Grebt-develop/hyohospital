import React, { useContext } from 'react';

const CountContext = React.createContext<number | undefined>(undefined);

const Counter: React.FC = () => {
    const count = useContext(CountContext);
    if (count === undefined){
        throw new Error('CountContext value is undefined');
    }
    return <h1>{count}</h1>
};

const ContextAPP: React.FC = () => {
    return (
        <CountContext.Provider value={1}>
            <Counter />
        </CountContext.Provider>
    )
}

export default ContextAPP;