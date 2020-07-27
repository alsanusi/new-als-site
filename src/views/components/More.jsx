import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: 'none',
        backgroundColor: '#fafafa'
    },
    skillsDesc: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '20px'
    },
    button: {
        color: '#C12121',
        border: '2px solid #C12121',
        margin: theme.spacing(1, 1.5)
    }
}));

export default function SimpleCard() {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <CardContent>
                        <Typography variant="h6" component="p" gutterBottom className={classes.skillsDesc} style={{ marginBottom: '50px' }}>
                            Check some of the projects and companies i've been involved with.
                        </Typography>
                        <Button variant="outlined" className={classes.button}>Check More</Button>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <CardContent>
                        <Typography variant="h6" component="p" gutterBottom className={classes.skillsDesc} style={{ marginBottom: '82px' }}>
                            Or download a summary of my work.
                        </Typography>
                        <Button variant="outlined" className={classes.button}>Download Resume</Button>
                    </CardContent>
                </Grid>
            </Grid>

        </Card>
    );
}