import React, { useState, useEffect } from 'react';

const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};


const Clock: React.FC = () => {
    const [time, setTime] = useState<string>(formatDate(new Date()));
    const [data, setData] = useState<any>(0);


    useEffect(() => {

        const fetchData = async () => {
            const queryParams = new URLSearchParams({
                eq: 'test@test.com',
                // writetime: formatDate(new Date())
                writetime: "2024-07-23 07:07:22"
            }).toString();
        
            const url = `https://www.grebt.kr/test/getbpmpacket?${queryParams}`

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const intervalid = setInterval(() => {
            setTime(formatDate(new Date()));
            // fetchData();
            
        }, 1000);

        return () => {
            clearInterval(intervalid);
        }
    }, []);

    return (
        <div>
            <h1>Current Time</h1>
            <p>{time}</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Clock;