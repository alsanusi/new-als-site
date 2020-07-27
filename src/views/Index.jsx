import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from './components/AppBar';
// import Copyright from './components/Copyright';
import Skills from './components/Skills';
import More from './components/More';
import Grid from '@material-ui/core/Grid';
import ContactMe from './components/ContactMe';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(12, 0, 6),
        height: '80vh'
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
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        [theme.breakpoints.up('xs')]: {
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35%',
        },
    },
    descHeader: {
        paddingTop: theme.spacing(12),
        color: '#fff',
        fontWeight: 'bold'
    },
    desc: {
        color: '#fff',
        lineHeight: '2.2',
        width: '60%',
        marginTop: theme.spacing(8),
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: theme.spacing(12),
    },
    redBox: {
        backgroundColor: '#8a2a2a',
        minHeight: '50vh',
        width: '100%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        fontWeight: 'bold'
    },
    headerSpacing: {
        marginBottom: theme.spacing(8),
    },
    headerDesc: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    moreHeader: {
        padding: theme.spacing(12, 0, 6),
        marginBottom: theme.spacing(8)
    },
    contactMeBox: {
        backgroundColor: '#8a2a2a',
        minHeight: '50vh',
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
            width: '10%',
        },
    },
    contactDesc: {
        paddingTop: theme.spacing(5),
        color: '#fff',
        fontWeight: 'bold'
    }
}));

export default function Index() {
    const classes = useStyles();
    const open = <span className={classes.bullet}>{"<"}</span>;
    const close = <span className={classes.bullet}>{"/>"}</span>;

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />
            {/* Hero unit */}
            <Container component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.headerSpacing}>
                    {open} Hello! {close}
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" component="p" className={classes.headerDesc}>
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
            <Box width="auto" className={classes.redBox}>
                <Typography variant="h5" align="center" gutterBottom className={classes.descHeader}>
                    Hi, I'm Alkautsar Sanusi. Nice to meet you.
                </Typography>
                <Typography variant="subtitle1" align="center" component="p" className={classes.desc}>
                    Coming from Makassar, Indonesia, I started my journey as a developer in 2012.
                    I have special interest in front-end and mobile development,
                    where I have worked most of my projects and potentialized my skills.
                    A fan of learning and interacting with new technologies,
                    these are the skills I have learned and improved during my journey.
                </Typography>
            </Box>
            <Skills />
            <Grid container style={{ marginBottom: '100px' }}>
                <Grid item xs={12} md={12}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.moreHeader}>
                        {open} More and More! {close}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <More />
                </Grid>
            </Grid>
            <ContactMe />
            <Box width="auto" className={classes.contactMeBox}>
                <img
                    className={classes.contactMeLogo}
                    alt={''}
                    src={require("../assets/img/logo.png")}
                />
                <Typography variant="h5" align="center" gutterBottom className={classes.contactDesc}>
                    Living, learning & leveling up one day at a time.
                </Typography>
            </Box>
            {/* <Box mt={5}>
                <Copyright />
            </Box> */}
            {/* End footer */}
        </Fragment >
    );
}