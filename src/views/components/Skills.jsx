import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        width: '90%',
        zIndex: '999',
        marginTop: '-70px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    skillsHeader: {
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20
    },
    skillsDesc: {
        marginBotton: 30,
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    skillsLanguage: {
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    }
});

export default function SimpleCard() {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            icon
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom className={classes.skillsHeader}>
                            Mobile Developer
                        </Typography>
                        <Typography variant="body2" component="p" gutterBottom className={classes.skillsDesc}>
                            I have crossed ways with this path a couple of times. I'm very curious about this path and looking forward to digging into it.
                        </Typography>
                        <Typography variant="body2" component="p" gutterBottom className={classes.skillsLanguage}>
                            Languages & tools I've learned and used:
                        </Typography>
                        <Typography variant="body2" component="p">
                            JavaScript, React Native, Flutter.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            icon
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom className={classes.skillsHeader}>
                            Front-end Development
                        </Typography>
                        <Typography variant="body2" component="p" gutterBottom className={classes.skillsDesc}>
                            I have crossed ways with this path a couple of times. I'm very curious about this path and looking forward to digging into it.
                        </Typography>
                        <Typography variant="body2" component="p" gutterBottom className={classes.skillsLanguage}>
                            Languages & tools I've learned and used:
                        </Typography>
                        <Typography variant="body2" component="p">
                            JavaScript, React Native, Flutter.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            icon
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom className={classes.skillsHeader}>
                            Back-end Development & Others
                        </Typography>
                        <Typography variant="body2" component="p" gutterBottom className={classes.skillsDesc}>
                            I have crossed ways with this path a couple of times. I'm very curious about this path and looking forward to digging into it.
                        </Typography>
                        <Typography variant="body2" component="p" gutterBottom className={classes.skillsLanguage}>
                            Languages & tools I've learned and used:
                        </Typography>
                        <Typography variant="body2" component="p">
                            JavaScript, React Native, Flutter.
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </Card>
    );
}