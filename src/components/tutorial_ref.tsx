import React, { useRef } from 'react';

const Tutorial_ref: React.FC = () => {
    const inputEl = useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        if (inputEl.current) {
            inputEl.current.focus();
        }
    }

    return (
        <div>
            <input ref={inputEl} type='text' />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )

}



export default Tutorial_ref;