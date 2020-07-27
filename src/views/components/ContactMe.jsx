import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        zIndex: '999',
        marginBottom: '-70px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    skillsHeader: {
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20
    },
    skillsDesc: {
        marginBotton: 30,
        width: '80%',
        lineHeight: '2.3',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {
        color: '#C12121',
        border: '2px solid #C12121',
        margin: theme.spacing(1, 1.5)
    },
    alignCenter: {
        alignSelf: 'center'
    }
}));

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} className={classes.alignCenter}>
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom className={classes.skillsHeader}>
                            Start a Project
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={4} className={classes.alignCenter}>
                    <CardContent>
                        <Typography variant="body1" component="p" gutterBottom className={classes.skillsDesc}>
                            Interested in working together? Let's schedule a call.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={4} className={classes.alignCenter}>
                    <CardContent>
                        <Button variant="outlined" className={classes.button}>Let's Talk</Button>
                    </CardContent>
                </Grid>
            </Grid>

        </Card>
    );
}