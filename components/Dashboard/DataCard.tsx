import { InfoOutlined } from "@mui/icons-material";
import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props;
  return (
    <Paper className="relative h-full w-full ml-[5rem] px-2 py-4">
      <div className="flex justify-center items-center">
        <Typography fontSize={"h6"} color={"lightslategrey"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography fontSize={16}>
              {`${description} which is ${value}`}
            </Typography>
          }
        >
          <IconButton>
            <InfoOutlined />
          </IconButton>
        </Tooltip>
      </div>
      <Typography fontSize={"h4"}>{value}</Typography>
    </Paper>
  );
};

export default DataCard;
