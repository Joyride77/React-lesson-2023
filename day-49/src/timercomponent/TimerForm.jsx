import React from 'react'
import { Button, Card, TextField, CardContent, Grid } from '@mui/material'


const TimerForm = ({ title, project }) => {
    console.log('title', title);
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
                                        placeholder={title}
                                        label={title}
                                        variant={"outlined"}
                                        fullWidth={true} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="text" placeholder={project} label={project} variant={"outlined"} fullWidth={true} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color={'success'} variant={"outlined"}>Create</Button>
                                    <Button color={'success'} variant={"outlined"}>Cancel</Button>
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