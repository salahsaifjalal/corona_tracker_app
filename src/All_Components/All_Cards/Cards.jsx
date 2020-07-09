import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';



const Cards =({data: {confirmed, recovered, deaths, lastUpdate}}) => {
   console.log(confirmed);
    if(!confirmed){
        return "Data is being loaded, please wait....";
    }
    

    return (
        <div className={styles.container}>
            <Grid container spacing = {3} justify="center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="body1" gutterBottom>Infected People</Typography>
                        <Typography variant="overline">{confirmed.value} </Typography>
                        <Typography color="overline">REAL DATA </Typography>
                        <Typography variant="body1">Number of active cases of COVID-19</Typography>
                        </CardContent>

                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="body1" gutterBottom>Recovered People</Typography>
                        <Typography variant="overline">{recovered.value} </Typography>
                        <Typography color="overline">REAL DATA </Typography>
                        <Typography variant="body1">Number of recovered cases of COVID-19</Typography>
                        </CardContent>

                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color="body1" gutterBottom>Deaths</Typography>
                        <Typography variant="overline">{deaths.value} </Typography>
                        <Typography color="overline">REAL DATA </Typography>
                        <Typography variant="body1">Number of deaths caused by COVID-19</Typography>
                        </CardContent>

                </Grid>
            </Grid>
        </div>

    );


} 
export default Cards;