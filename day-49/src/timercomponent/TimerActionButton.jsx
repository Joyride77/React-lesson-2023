
import Button from '@mui/material/Button';

const TimerActionButton = ({ isTimerRunning, onStartClick, onStopClick }) => {
    // console.log(isTimerRunning)
    return (
        <div>
            {
                isTimerRunning ?
                    <Button
                        color={"error"}
                        fullWidth={true}
                        variant={"outlined"}
                        onClick={onStopClick}
                    >
                        Stop
                    </Button>
                    :
                    <Button
                        color={"success"}
                        fullWidth={true}
                        variant={"outlined"}
                        onClick={onStartClick}
                    >
                        Start
                    </Button>
            }
        </div>
    )
}

export default TimerActionButton