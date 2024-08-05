import React, { useMemo } from "react"

interface Props {
    a: number;
    b: number;
}

const TutorialMemo: React.FC<Props> = ({a, b}) => {
    const result = useMemo(() => {
        return a + b;
    }, [a, b]);

    return <div>{result}</div>
}

export default TutorialMemo;
