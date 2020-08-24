import React, { forwardRef } from 'react';
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
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                variant="outlined"
                                label="Email Address"
                                type="email"
                                fullWidth
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
                                color="secondary"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={isClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={isClose} color="secondary" className={classes.send}>
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}