import React, { Fragment, useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: '#8a2a2a',
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        boxShadow: '-9px 9px 20px rgb(51 51 51 / 17%), -10px 8px 40px rgb(232 232 232 / 23%)'
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function ContactList() {
    const classes = useStyles();
    const [data, setData] = useState([])

    useEffect(() => {
        let fetchData;
        axios.get('https://mighty-wave-71572.herokuapp.com/api/contact')
            .then(res => {
                fetchData = res.data
                setData(res.status === 200 ? fetchData : [])
            })
            .catch(err => {
                setData([])
            })
    }, [])

    return (
        <Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
                            Contact List
                        </Typography>
                        <Typography variant="h5" align="center" paragraph style={{ color: '#fff' }}>
                            List of contact who fill the from in muhalkautsarsanusi.com
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container justify="center">
                                <Grid item>
                                    <Button component={NavLink} to={'/'} style={{ color: '#fff', fontWeight: 'bold' }}>
                                        Back To Site
                                     </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container align="center" spacing={4}>
                        {data.map((x) => (
                            <Grid item key={x.id} xs={12} md={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold', color: '#8a2a2a' }}>
                                            {x.name}
                                        </Typography>
                                        <Typography gutterBottom variant="body2">
                                            {x.email}
                                        </Typography>
                                        <Typography>
                                            {x.message}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </Fragment>
    );
}   