import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        backgroundColor: '#FFF',
        height: theme.spacing(10)
    },
    toolbar: {
        flexWrap: 'wrap',
        marginTop: theme.spacing(1)
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    img: {
        position: 'absolute',
        width: '50px',
        marginTop: 8,
        top: 0,
        bottom: 0,
        display: 'block',
    },
    contactMe: {
        color: '#C12121',
        fontWeight: 'bold',
        border: '1px solid #C12121',
        margin: theme.spacing(1, 1.5)
    }
}));

export default function Pricing() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Toolbar className={classes.toolbarTitle}>
                    <img
                        className={classes.img}
                        alt={''}
                        src={require("../../assets/img/logo.png")}
                    />
                </Toolbar>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        About Me
                        </Link>
                </nav>
                <Button href="#" variant="outlined" className={classes.contactMe}>
                    Contact Me
                    </Button>
            </Toolbar>
        </AppBar>
    );
}