import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }
  const active = confirmed["value"] - recovered["value"] - deaths["value"];
  let carddetails = [
    {
      style: styles.infected,
      text: "Infected",
      value: confirmed.value,
      bottomText: "Number of infect cases of COVID-19",
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
    {
      style: styles.active,
      text: "Active",
      value: active,
      bottomText: "Number of active cases of COVID-19",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {carddetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={2}
            className={cx(styles.Card, detail.style)}
            key={index}
            style={{ margin: "0px 23.675px", padding: "12px" }}
          >
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                <b>{detail.text}</b>
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary">Last Updated at : </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {new Date(lastUpdate).toLocaleTimeString()}
              </Typography>
              <Typography variant="body2">{detail.bottomText}</Typography>
              <Typography color="textPrimary"> {country} </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
