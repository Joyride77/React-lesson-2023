import React, { useState } from 'react'
import { Button, Card, TextField, CardContent, Grid } from '@mui/material'


const TimerForm = ({ id, title, project, onFormSubmit, onFormClose }) => {

    const [timer, setTimer] = useState({
        title: title || "",
        project: project || "",
    });

    const submitText = id ? 'Update' : "Create";

    function handleTitleChange(e) {
        console.log(e.target.value);
        setTimer({
            ...timer,
            title: e.target.value,
        })
    }

    function handleProjectChange(e) {
        setTimer({
            ...timer,
            project: e.target.value,
        })
    }
    return (
        <div>
            <h1>Timer form</h1>
            <Grid>
                <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        placeholder={timer.title}
                                        label={"Title"}
                                        value={timer.title}
                                        variant={"outlined"}
                                        fullWidth={true}
                                        onChange={handleTitleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        placeholder={timer.project}
                                        label={"Project"}
                                        value={timer.project}
                                        variant={"outlined"}
                                        fullWidth={true}
                                        onChange={handleProjectChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={onFormSubmit} color={'success'} variant={"outlined"}>{submitText}</Button>
                                    <Button onClick={onFormClose} color={'success'} variant={"outlined"}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default TimerForm