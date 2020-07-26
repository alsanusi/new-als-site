import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from './components/AppBar';
import Copyright from './components/Copyright';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        height: '100vh'
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    img: {
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        [theme.breakpoints.up('xs')]: {
            width: '80%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
    },
    descHeader: {
        paddingTop: theme.spacing(12),
        color: '#fff'
    },
    desc: {
        color: '#fff',
        lineHeight: '1.8',
        whiteSpace: 'no-wrap',
        margin: theme.spacing(12),
        paddingBottom: theme.spacing(12),
    }
}));

export default function Index() {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Hi Everyone!
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" component="p">
                    I'm a Web and Mobile Developer, passionate about what I do,
                    and always learning something new.
                </Typography>
            </Container>
            {/* End hero unit */}
            <div>
                <img
                    className={classes.img}
                    alt={''}
                    src={require("../assets/img/laptop.png")}
                />
            </div>
            <Box width="auto" style={{ backgroundColor: '#C12121', minHeight: '50vh', width: '100%' }}>
                <Typography variant="h4" align="center" gutterBottom className={classes.descHeader}>
                    Hi, I'm Alkautsar Sanusi. Nice to meet you.
                </Typography>
                <Typography variant="h6" align="center" className={classes.desc}>
                    Coming from Makassar, Indonesia, I started my journey as a developer in 2012.
                    I have special interest in front-end and mobile development,
                    where I have worked most of my projects and potentialized my skills.
                    A fan of learning and interacting with new technologies,
                    these are the skills I have learned and improved during my journey.
                </Typography>
            </Box>
            <Box mt={5}>
                <Copyright />
            </Box>
            {/* End footer */}
        </Fragment >
    );
}