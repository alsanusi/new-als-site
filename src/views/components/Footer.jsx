import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ContactMe from './ContactMe';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    contactMeBox: {
        backgroundColor: '#8a2a2a',
        minHeight: '30vh',
        width: '100%',
        zIndex: '-1',
        position: 'absolute'
    },
    contactMeLogo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        paddingTop: theme.spacing(15),
        [theme.breakpoints.up('xs')]: {
            width: '30%',
        },
        [theme.breakpoints.up('md')]: {
            width: '8%',
        },
    },
    contactDesc: {
        paddingTop: theme.spacing(5),
        color: '#fff',
        fontWeight: 'bold',
        paddingBottom: theme.spacing(5),
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    socialMedia: {
        marginLeft: 10,
        marginRight: 10,
        [theme.breakpoints.up('xs')]: {
            width: '20%',
        },
        [theme.breakpoints.up('md')]: {
            width: '8%',
        },
    },
    socialMediaWrapper: {
        display: 'block',
        [theme.breakpoints.up('xs')]: {
            width: '40%',
        },
        [theme.breakpoints.up('md')]: {
            width: '25%',
        },
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(5),
    }
}));

export default function Index() {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <ContactMe />
            <Box width="auto" className={classes.contactMeBox}>
                <img
                    className={classes.contactMeLogo}
                    alt={''}
                    src={require("../../assets/img/logo.png")}
                />
                <Typography variant="body1" align="center" gutterBottom className={classes.contactDesc}>
                    Living, learning & leveling up one day at a time.
                </Typography>
                <div className={classes.socialMediaWrapper}>
                    <img
                        className={classes.socialMedia}
                        alt={''}
                        src={require("../../assets/img/footer/linkedin.png")}
                    />
                    <img
                        className={classes.socialMedia}
                        alt={''}
                        src={require("../../assets/img/footer/twitter.png")}
                    />
                    <img
                        className={classes.socialMedia}
                        alt={''}
                        src={require("../../assets/img/footer/github.png")}
                    />
                </div>
                <Copyright />
            </Box>
        </Fragment >
    );
}