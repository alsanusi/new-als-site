import React, { forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// const useStyles = makeStyles((theme) => ({
//     cardBase: {
//         border: '2px solid #8a2a2a',
//         borderRadius: 20,
//         boxShadow: '-9px 9px 20px rgb(51 51 51 / 17%), -10px 8px 40px rgb(232 232 232 / 23%)'
//     },
// }));


export default function FormDialog({ ...props }) {
    const { isOpen, isClose } = props
    // const classes = useStyles();

    return (
        <div>
            <Dialog open={isOpen} onClose={isClose} TransitionComponent={Transition}>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogContent>
                    <DialogContentText>
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
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                variant="outlined"
                                label="Email Address"
                                type="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                variant="outlined"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={isClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={isClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}