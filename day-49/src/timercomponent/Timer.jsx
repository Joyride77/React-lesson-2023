import React from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TimerActionButton from './TimerActionButton';
import { useState } from 'react';
import { renderElapsedString } from './Helpers';

const Timer = ({ title, project, elapsed, runningSince, runningTime }) => {

    const [timerIsRunning, setTimerIsRunning] = useState(false)
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const timer = renderElapsedString(elapsed, runningSince);

    // function onStartClick() {

    // }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 345 }} >
                <Typography sx={{ fontSize: 28 }} color='text.secondary'>
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {project}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>{secondsPassed.toFixed(3)}</h1>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>{timer}</h1>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <ModeEditIcon />
                    <DeleteIcon />
                </Box>
                <TimerActionButton
                    isTimerRunning={timerIsRunning}
                    onStartClick={() => {
                        setTimerIsRunning(true);
                        setStartTime(Date.now());
                        setNow(Date.now());

                        setInterval(() => {
                            setNow(Date.now());
                        }, 10)
                    }}
                    onStopClick={() => setTimerIsRunning(false)}
                />
            </Card>
        </Container>
    )
}

export default Timer