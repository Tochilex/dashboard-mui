import { Grid2 } from "@mui/material";
import React from "react";
import DataCard from "./DataCard";

const DataRibbon = () => {
  return (
    <Grid2
      container
      gap={2}
      sx={{
        pr: "6rem",
        display: "grid",
        textAlign: "center",
        gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
      }}
    >
      <Grid2>
        <DataCard
          title={"Total Sales"}
          value={"789"}
          description={"The total sales in the current financial year"}
        />
      </Grid2>

      <Grid2>
        <DataCard
          title={"Total Value"}
          value={"$234,445.65"}
          description={"The total sales in the current financial year"}
        />
      </Grid2>

      <Grid2>
        <DataCard
          title={"Avg. Order Value"}
          value={"$623.65"}
          description={"The total sales in the current financial year"}
        />
      </Grid2>

      <Grid2>
        <DataCard
          title={"Conversion rate"}
          value={"0.61%"}
          description={"The total sales in the current financial year"}
        />
      </Grid2>
    </Grid2>
  );
};

export default DataRibbon;
