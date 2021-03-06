import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";
import { purple, grey, red, lightBlue } from "@material-ui/core/colors";
import { Stage, Layer, Rect, Circle, Arrow } from "react-konva";
import { AlgoContext } from "../AlgoContext";

const useStyles = makeStyles((theme) => ({
  barItem: {
    display: "flex",
    alignItems: "center",
    "&>*": {
      marginRight: theme.spacing(1),
      color: grey[900],
    },
  },
  toolBar: {
    height: "80%",
    "& > :first-child": {
      marginLeft: theme.spacing(5),
    },
    "&>*": {
      marginRight: theme.spacing(10),
    },
  },
  icon: {
    width: "2.4vh",
    height: "2.4vh",
    outline: `1px solid ${lightBlue[300]}`,
  },
  desciption: {
    textAlign: "center",
  },
}));

const SubHeader = (props) => {
  const [algo, setAlgo] = useContext(AlgoContext);
  const classes = useStyles();
  return (
    <div className={props.className}>
      <Grid container direction='row' className={classes.toolBar}>
        <Box className={classes.barItem}>
          <Stage width={26} height={26}>
            <Layer>
              <Arrow
                points={[1, 13, 23, 13]}
                pointerLength={5}
                pointerWidth={5}
                fill='red'
                stroke='red'
                strokeWidth={2}
              />
              <Rect
                x={0}
                y={0}
                width={26}
                height={26}
                stroke={lightBlue[200]}
                strokeWidth={2}
              />
            </Layer>
          </Stage>
          <Typography variant='h6'>Start</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Stage width={26} height={26}>
            <Layer>
              <Circle radius={7} fill={"red"} x={13} y={13} />
              <Rect
                x={0}
                y={0}
                width={26}
                height={26}
                stroke={lightBlue[200]}
                strokeWidth={2}
              />
            </Layer>
          </Stage>
          <Typography variant='h6'>Target node</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box className={classes.icon}></Box>
          <Typography variant='h6'>Unvisited nodes</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: purple[400] }}
          ></Box>
          <Typography variant='h6'>Visited nodes</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: red[500] }}
          ></Box>
          <Typography variant='h6'>Shortest path</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: grey[900] }}
          ></Box>
          <Typography variant='h6'>Obstacles</Typography>
        </Box>
      </Grid>
      {algo.type !== null ? (
        <Typography className={classes.desciption} variant='h6'>
          {algo.type} is {algo.isWeighted ? "weighted" : "not weighted"} and{" "}
          {algo.isShortest
            ? "guarantees shortest path"
            : "does not guarante shortest path"}
        </Typography>
      ) : (
        <Typography className={classes.desciption} variant='h6'>
          {" "}
          Pick an algorithm!
        </Typography>
      )}
    </div>
  );
};

export default SubHeader;
