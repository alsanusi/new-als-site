import React, { forwardRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import SuccessSnackbar from './Snackbar/Success';
import FailedSnackbar from './Snackbar/Failed';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            border: '4px solid #8a2a2a',
            borderRadius: 20,
            boxShadow: '-9px 9px 20px rgb(51 51 51 / 17%), -10px 8px 40px rgb(232 232 232 / 23%)'
        }
    },
    title: {
        fontWeight: 'bold',
        color: '#8a2a2a',
        fontSize: 25
    },
    description: {
        marginBottom: theme.spacing(4)
    },
    send: {
        fontWeight: 'bold'
    }
}));

export default function FormDialog({ ...props }) {
    const { isOpen, isClose } = props
    const classes = useStyles();
    const [body, setBody] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChangeName = event => {
        setBody({ ...body, name: event.target.value })
    }
    const handleChangeEmail = event => {
        setBody({ ...body, email: event.target.value })
    }
    const handleChangeMessage = event => {
        setBody({ ...body, message: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://mighty-wave-71572.herokuapp.com/api/contact', body)
            .then(res => {
                setSuccess(true)
                isClose()
            })
            .catch(err => {
                setError(true)
                isClose()
            })
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={isClose} TransitionComponent={Transition} className={classes.root}>
                <DialogTitle>
                    <div className={classes.title}>
                        Contact Me
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className={classes.description}>
                        Thanks for taking the time to reach out. How can I help you today?
                    </DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                label="Full Name"
                                type="text"
                                fullWidth
                                required
                                onChange={handleChangeName}
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                variant="outlined"
                                label="Email Address"
                                type="email"
                                fullWidth
                                required
                                onChange={handleChangeEmail}
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                variant="outlined"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                                onChange={handleChangeMessage}
                                color="secondary"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={isClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={handleSubmit} disabled={!body.name || !body.email || !body.message} color="secondary" className={classes.send}>
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
            {
                success ?
                    <SuccessSnackbar /> :
                    error ?
                        <FailedSnackbar /> : <div />
            }
        </div>
    );
}