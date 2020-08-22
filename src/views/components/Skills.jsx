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
    skillsLanguage: {
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    icon: {
        width: '13%'
    }
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <CardContent style={{ paddingBottom: 50, paddingTop: 50 }}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <img
                                className={classes.icon}
                                alt={''}
                                src={require("../../assets/img/skills/mobile.png")}
                            />
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
                    <CardContent style={{ paddingBottom: 50, paddingTop: 50 }}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <img
                                className={classes.icon}
                                style={{ width: '13%' }}
                                alt={''}
                                src={require("../../assets/img/skills/fe.png")}
                            />
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
                    <CardContent style={{ paddingBottom: 50, paddingTop: 50 }}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <img
                                className={classes.icon}
                                alt={''}
                                src={require("../../assets/img/skills/be.png")}
                            />
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom className={classes.skillsHeader}>
                            Back-end Development
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