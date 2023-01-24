import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import timerData from '../data/data'
import Timer from './Timer';
import TimerForm from './TimerForm';
const TimerDashboard = () => {
    const [timers, setTimers] = useState([]);

    useEffect(() => {
        setTimers(timerData);
    }, [timers])


    return (
        <div>
            <h1>Timers</h1>

            {
                timers && timers.map((data, index) => {
                    return (
                        <Timer
                            key={index}
                            project={data.project}
                            title={data.title}
                            elapsed={data.elapsed}
                            runningSince={data.runningSince}
                        />
                    )
                })
            }
            <TimerForm title={"Title"} project={"Project"} />
        </div>
    )
}

export default TimerDashboard