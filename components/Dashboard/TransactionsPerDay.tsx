import { Card, Grid2, Paper, Typography } from "@mui/material";
import React from "react";
import DataChart from "./DataChart";

import { lineChartData } from "../mockData";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerDay = () => {
  //const theme = useTheme();

  return (
    <Grid2 sx={{ ml: "5rem" }}>
      <Paper sx={{ display: { xs: "block", md: "flex" } }}>
        <div className="max-w-full w-full lg:w-[80%]">
          <Typography>TransActions per day</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className="flex flex-row lg:flex-col lg:max-w-[20%]">
          <Card
            sx={{
              textAlign: "center",

              borderRadius: "8px",
              width: "100%",
              p: { xs: "1rem", md: "2" },
            }}
            variant={"outlined"}
          >
            <div className="text-3xl">
              <Typography>Total Products</Typography>
            </div>
            <div className="text-lg">
              <Typography>1.275</Typography>
              <Typography fontSize={14}>428.7%</Typography>
            </div>
          </Card>
          <Card
            className="text-center p-4 rounded-lg w-full lg:p-2"
            variant={"outlined"}
          >
            <div className="text-3xl">
              <Typography>Buy-to-detail</Typography>
            </div>
            <div className="text-lg">
              <Typography>4.40%</Typography>
              <Typography fontSize={14}>899.4%</Typography>
            </div>
          </Card>
          <Card className="text-lg" variant={"outlined"}>
            <div className="text-3xl">
              <Typography>Refunds</Typography>
            </div>
            <div className="text-lg">
              <Typography>0</Typography>
              <Typography fontSize={14}>0</Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid2>
  );
};

export default TransactionsPerDay;
