import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from './components/AppBar';
import Skills from './components/Skills';
import More from './components/More';
import Grid from '@material-ui/core/Grid';
import GitHubCalendar from 'react-github-calendar';
import Footer from './components/Footer';

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
            width: '50%',
        },
    },
    descHeader: {
        paddingTop: theme.spacing(10),
        color: '#fff',
        fontWeight: 'bold',
        width: '60%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        minHeight: '60vh',
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
        marginBottom: theme.spacing(5)
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
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(8),
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
                <div className={classes.socialMediaWrapper}>
                    <a href={"https://www.linkedin.com/in/muhammad-alkautsar-sanusi-6013ba123/"} target="_blank" rel="noopener noreferrer">
                        <img
                            className={classes.socialMedia}
                            alt={''}
                            src={require("../assets/img/socialmedia/linkedin.png")}
                        />
                    </a>
                    <a href={"https://twitter.com/alkautstark_"} target="_blank" rel="noopener noreferrer">
                        <img
                            className={classes.socialMedia}
                            alt={''}
                            src={require("../assets/img/socialmedia/twitter.png")}
                        />
                    </a>
                    <a href={"https://github.com/alsanusi"} target="_blank" rel="noopener noreferrer">
                        <img
                            className={classes.socialMedia}
                            alt={''}
                            src={require("../assets/img/socialmedia/github.png")}
                        />
                    </a>
                </div>
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
                    Born in Makassar, Indonesia, I started my journey as a developer in 2012.
                    I have special interest in front-end and mobile development,
                    where I have worked most of my projects and potentialized my skills.
                    A fan of learning and interacting with new technologies,
                    these are the skills I have learned and improved during my journey.
                </Typography>
            </Box>
            <Skills />
            <Grid container style={{ marginBottom: '100px' }}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" align="center" color="textPrimary" className={classes.moreHeader}>
                        {open} More and More! {close}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <div style={{ marginBottom: 80 }}>
                        <Typography variant="h5" align="center" color="textPrimary" style={{ marginBottom: 60 }}>
                            Github Activity
                        </Typography>
                        <GitHubCalendar username="alsanusi" color="hsl(4, 100%, 53%)" fontSize={15} blockSize={10} blockMargin={10} />
                    </div>
                    <More />
                </Grid>
            </Grid>
            <Footer />
        </Fragment >
    );
}