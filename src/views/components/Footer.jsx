import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ContactMe from './ContactMe';

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
    },
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
                <Typography variant="h6" align="center" gutterBottom className={classes.contactDesc}>
                    Living, learning & leveling up one day at a time.
                </Typography>
            </Box>
        </Fragment >
    );
}