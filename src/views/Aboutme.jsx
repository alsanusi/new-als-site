import React, { Fragment, useEffect } from 'react';
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
        [theme.breakpoints.up('xs')]: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(10),
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(12),
        }
    },
    collabContainer: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(12)
    },
    collabIcon: {
        width: '30%'
    }
}));

export default function Index() {
    const classes = useStyles();
    const open = <span className={classes.bullet}>{"<"}</span>;
    const close = <span className={classes.bullet}>{"/>"}</span>;

    const portfolioData = [
        {
            id: 1,
            img: "https://res.cloudinary.com/metrotech-digital-asia/image/upload/v1598263398/als-site/portfolio/technogic_qyxwri.png",
            title: "Technogic",
            desc: "is a web app for a company profile.",
            techStack: "PHP & SQL",
            isActive: true,
            link: "http://technogic.qa/"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/metrotech-digital-asia/image/upload/v1598263392/als-site/portfolio/pantaucovid19_hodoha.png",
            title: "PantauCovid19",
            desc: "is a web app for Covid19 Analytics.",
            techStack: "ReactJs",
            isActive: true,
            link: "https://pantaucovid19.metrotechdigital.asia/"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/metrotech-digital-asia/image/upload/v1598263401/als-site/portfolio/covlytics_nl65ee.png",
            title: "CovLytics",
            desc: "is a web app for Covid19 Analytics.",
            techStack: "ReactJs",
            isActive: false,
            link: "https://github.com/Makassar-Developer-Society/belajar-react"
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/metrotech-digital-asia/image/upload/v1598263403/als-site/portfolio/armalaproperty_gjw9mu.png",
            title: "Armala Property",
            desc: "is a web app for property management.",
            techStack: "ExpressJs, NodeJs & SQL",
            isActive: false,
            link: "https://github.com/alsanusi/armalaproperty"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/metrotech-digital-asia/image/upload/v1598263401/als-site/portfolio/geniuscar_h9dfin.png",
            title: "Genius Car",
            desc: "is a web app for car maintenance service.",
            techStack: "ExpressJs, NodeJs & SQL",
            isActive: false,
            link: "https://github.com/alsanusi/geniusVariasi"
        },
        {
            id: 6,
            img: "https://res.cloudinary.com/metrotech-digital-asia/image/upload/v1598263404/als-site/portfolio/jayabaya_ekvpm8.png",
            title: "Jayabaya University",
            desc: "is a web app for university profile.",
            techStack: "PHP & SQL",
            isActive: true,
            link: "http://www.jayabaya.ac.id/"
        }
    ]

    useEffect(() => {
        // Scroll to the top of page
        window.scrollTo(0, 0)
    }, []);

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />
            {/* Hero unit */}
            <Container className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.headerSpacing}>
                    {open} Works! {close}
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" component="p" className={classes.headerDesc}>
                    Here a few projects i have worked on in the past.
                </Typography>
            </Container>
            <Container className={classes.workContainer}>
                <Grid container spacing={4}>
                    {portfolioData.map(x => (
                        <Grid item xs={12} md={4} key={x.id}>
                            <WorkCard img={x.img} title={x.title} desc={x.desc} techStack={x.techStack} isActive={x.isActive} link={x.link} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container className={classes.collabContainer}>
                <Typography variant="h5" align="center" color="textPrimary" style={{ fontWeight: 'bold' }}>
                    I'm proud to have collaborated with some awesome company & organization:
                </Typography>
                <Grid container justify="center" spacing={2} style={{ marginTop: 50 }}>
                    <Grid item xs={12} md={6}>
                        <a href={"https://metrotechdigital.asia/"} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/img/collabs/metrotech.png")} alt="" className={classes.collabIcon} />
                        </a>
                        <Typography variant="body2" align="center" color="textPrimary">
                            Metrotech Digital Asia
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <a href={"https://github.com/Makassar-Developer-Society"} target="_blank" rel="noopener noreferrer">
                            <img src={require("../assets/img/collabs/mds.png")} alt="" className={classes.collabIcon} />
                        </a>
                        <Typography variant="body2" align="center" color="textPrimary">
                            Makassar Developer Society
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Fragment >
    );
}