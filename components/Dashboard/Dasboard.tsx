import { Box, Grid2 } from "@mui/material";

import React from "react";
import DataRibbon from "./DataRibbon";
import TransactionsPerDay from "./TransactionsPerDay";
import TransactionBottomRow from "./TransactionBottomRow";
import HeaderBox from "./HeaderBox";

const Dasboard = () => {
  const loggedIn = { firstName: "Rashid" };
  return (
    <Box>
      <Grid2 container gap={4} marginTop={2}>
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account efficiently"
        />
        <DataRibbon />
        <TransactionsPerDay />
      </Grid2>

      <TransactionBottomRow />
    </Box>
  );
};

export default Dasboard;
