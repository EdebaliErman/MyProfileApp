import React, { useEffect, useRef, useState } from 'react'

function SkillCard({ point, dash, skillName }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === point) {
            clearInterval(intervalRef.count);
        }
    }, [count, point]);

    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.count = setInterval(() => {
            setCount(prevcount => prevcount + 1);
        }, 30);
        return () => {
            clearInterval(intervalRef.count);
        };
    }, []);
    return (
        <div className='skillcard'>
            <div className='skill'>
                <div className='outer'>
                    <div className='inner'>
                        <div id='number'>
                            <h3>
                                {count}%
                            </h3>
                            <h3>{skillName}</h3>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180px" height="180px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="tomato" />
                            <stop offset="100%" stopColor="orange" />
                        </linearGradient>
                    </defs>
                    <circle style={{ '--count': `${dash}` }} cx="90" cy="90" r="80" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}

export default SkillCard
