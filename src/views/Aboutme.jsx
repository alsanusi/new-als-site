import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from './components/AppBar';
import WorkCard from './components/WorkCard';
import Footer from './components/Footer';
import Grid from '@material-ui/core/Grid';

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
        height: '40vh'
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
    desc: {
        color: '#fff',
        lineHeight: '2.2',
        width: '60%',
        marginTop: theme.spacing(8),
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: theme.spacing(12),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        fontWeight: 'bold'
    },
    headerSpacing: {
        marginBottom: theme.spacing(4),
    },
    headerDesc: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    workContainer: {
        padding: theme.spacing(2, 0, 12),
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
                    {open} My Work! {close}
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" component="p" className={classes.headerDesc}>
                    Here a few projects i have worked on in the past.
                </Typography>
            </Container>
            <Container className={classes.workContainer}>
                <Grid container justify="center" spacing={6}>
                    <Grid item>
                        <WorkCard />
                    </Grid>
                    <Grid item>
                        <WorkCard />
                    </Grid>
                    <Grid item>
                        <WorkCard />
                    </Grid>
                </Grid>
            </Container>
            {/* End hero unit */}
            <Footer />
        </Fragment >
    );
}