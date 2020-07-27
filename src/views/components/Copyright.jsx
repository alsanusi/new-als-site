
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default function Copyright() {
    return (
        <div style={{ marginTop: 20, marginBottom: 40 }}>
            <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#fff' }}>
                <Link color="inherit" href="https://material-ui.com/">
                    Handcrafted by Alkautsar with <img src={require("../../assets/img/love.png")} alt="react" style={{ height: 20 }} /> and <img src={require("../../assets/img/react.png")} alt="react" style={{ height: 20 }} /> ©
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}