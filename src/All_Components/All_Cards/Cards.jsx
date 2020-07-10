import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards =({data: {confirmed, recovered, deaths, lastUpdate}}) => {
   console.log(confirmed);
    if(!confirmed){
        return "Data is being loaded, please wait....";
    }
    

    return (
        <div className={styles.container}>
            <Grid container spacing = {3} justify="center">
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.infected)}   >
                    <CardContent>
                        <Typography color="body1" gutterBottom>Infected People</Typography>
                        <Typography variant="overline">
                            <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                              </Typography>
                        <Typography color="overline">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body1">Number of active cases of COVID-19</Typography>
                        </CardContent>

                </Grid>
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}   >
                    <CardContent>
                        <Typography color="body1" gutterBottom>Recovered People</Typography>
                        <Typography variant="overline">
                            <CountUp start={0} end={recovered.value} duration={3} separator="," />
                              </Typography>
                        <Typography color="overline">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body1">Number of recovered cases of COVID-19</Typography>
                        </CardContent>

                </Grid>
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}   >
                    <CardContent>
                        <Typography color="body1" gutterBottom>Deaths</Typography>
                        <Typography variant="overline">
                            <CountUp start={0} end={deaths.value} duration={3} separator="," />
                              </Typography>
                        <Typography color="overline">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body1">Number of deaths caused by COVID-19</Typography>
                        </CardContent>

                </Grid>
            </Grid>
        </div>

    );


} 
export default Cards;