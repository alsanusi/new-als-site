import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import { NavLink } from 'react-router-dom';
import ContactDialog from './ContactDialog';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        backgroundColor: '#fafafa',
        height: theme.spacing(10),
        paddingTop: theme.spacing(3)
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
        width: '70px',
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
    },
}));

export default function Pricing() {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false)

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <CssBaseline />
            <ContactDialog isOpen={openDialog} isClose={handleCloseDialog} />
            <Toolbar className={classes.toolbar}>
                <Toolbar className={classes.toolbarTitle}>
                    <Link component={NavLink} to={'/'}>
                        <img
                            className={classes.img}
                            alt={'als-logo'}
                            src={require("../../assets/img/logo.png")}
                        />
                    </Link>
                </Toolbar>
                <nav>
                    <Link variant="button" component={NavLink} to={'/about-me'} color="textPrimary" href="#" className={classes.link}>
                        About Me
                    </Link>
                </nav>
                <Button onClick={handleOpenDialog} variant="outlined" className={classes.contactMe}>
                    <EmailIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );
}