import React from "react";
import DataChart from "./DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "../mockData";

import { Grid2 } from "@mui/material";

const TransactionBottomRow = () => {
  return (
    <Grid2
      marginTop={2}
      container
      sx={{
        display: "grid",
        gap: "0.5rem",
        gridTemplateColumns: { md: "repeat(4, 1fr)", sm: "1fr" },
        ml: "5rem",
      }}
    >
      <Grid2>
        <Paper
          sx={{
            display: "relative",
            top: "1rem",
            height: "100%",
            width: "calc(100% - 0.1rem)",
            py: "0.5rem",
            px: "1rem",
          }}
        >
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper
          sx={{
            display: "relative",
            top: "1rem",
            height: "100%",
            width: "calc(100% - 0.1rem)",
            py: "0.5rem",
            px: "1rem",
          }}
        >
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper
          sx={{
            display: "relative",
            top: "1rem",
            height: "100%",
            width: "calc(100% - 0.1rem)",
            py: "0.5rem",
            px: "1rem",
          }}
        >
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper
          sx={{
            display: "relative",
            top: "1rem",
            height: "100%",
            width: "calc(100% - 0.1rem)",
            py: "0.5rem",
            px: "1rem",
          }}
        >
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default TransactionBottomRow;
