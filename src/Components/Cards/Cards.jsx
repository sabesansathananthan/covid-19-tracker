import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  console.log(confirmed);
  let carddetails = [
    {
      style: styles.infected,
      text: "Infected",
      value: confirmed.value,
      bottomText: "Number of active cases of COVID-19",
    },
    {
      style: styles.recovered,
      text: "Recovered",
      value: recovered.value,
      bottomText: "Number of recoveries from COVID-19",
    },
    {
      style: styles.deaths,
      text: "Deaths",
      value: deaths.value,
      bottomText: "Number of deaths caused by COVID-19",
    },
  ];

  console.log(carddetails);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {carddetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.Card, detail.style)}
            key={index}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {detail.text}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{detail.bottomText}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
