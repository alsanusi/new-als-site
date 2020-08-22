import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 345,
        border: '2px solid #8a2a2a',
        backgroundColor: 'none',
        boxShadow: '-9px 9px 20px rgb(51 51 51 / 17%), -10px 8px 40px rgb(232 232 232 / 23%)'
    },
    media: {
        height: 250,
    },
    visitButton: {
        fontWeight: 'bold',
        color: '#8a2a2a',
        marginTop: 30
    }
});

export default function MediaCard({ ...props }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: 30 }}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 20 }}>
                        {props.desc}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 20 }}>
                        Develop Using:
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 10, fontWeight: 'bold' }}>
                        {props.techStack}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', color: '#8a2a2a', marginBottom: 30 }}>
                {
                    props.isActive ?
                        <Button size="medium" className={classes.visitButton} href={props.link} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </Button>
                        :
                        <Button size="medium" className={classes.visitButton} href={props.link} target="_blank" rel="noopener noreferrer">
                            Github Code
                        </Button>
                }
            </CardActions>
        </Card>
    );
}