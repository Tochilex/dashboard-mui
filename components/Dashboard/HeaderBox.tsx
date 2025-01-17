import { Box, Typography } from "@mui/material";
import React from "react";

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

const HeaderBox = ({
  type = "title",
  title,
  user,
  subtext,
}: HeaderBoxProps) => {
  return (
    //Tailwind
    // <div className="ml-[5rem]">
    //   <div>
    //     <h1 className="font-bold text-3xl">
    //       {title}{" "}
    //       {type === "greeting" && (
    //         <span className="text-blue-500"> {user}</span>
    //       )}
    //     </h1>
    //     <p className="text-gray-500">{subtext}</p>
    //   </div>
    // </div>

    //MUI
    <Box sx={{ ml: "5rem" }}>
      <Typography variant="h4" component="h1">
        {title}
        {type === "greeting" && (
          <Typography variant="h4" component="span" color="primary">
            &nbsp; {user}
          </Typography>
        )}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {subtext}
      </Typography>
    </Box>
  );
};

export default HeaderBox;
