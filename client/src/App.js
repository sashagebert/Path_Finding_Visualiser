import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainHeader from "./components/main_header/MainHeader";
import SubHeader from "./components/subheader/SubHeader";
import Visualiser from "./components/visualiser/Visualiser";
import { Grid, Box } from "@material-ui/core";
import { AlgoProvider } from "./components/AlgoContext";

const useStyles = makeStyles({
  headerBox: {
    height: "7vh",
  },
  subHeaderBox: {
    height: "10vh",
  },
  visualiserBox: {
    height: "83vh",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <AlgoProvider>
      <Box>
        <Grid container direction='column'>
          <Grid item>
            <MainHeader className={classes.headerBox} />
          </Grid>
          <Grid item>
            <SubHeader className={classes.subHeaderBox} />
          </Grid>
          <Grid item>
            <Visualiser className={classes.visualiserBox} />
          </Grid>
        </Grid>
      </Box>
    </AlgoProvider>
  );
};
export default App;

//#97dffc
//#858ae3
//#613dc1
//https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-ho
