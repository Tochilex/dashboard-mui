//Next API to fetch data from database

import { NextResponse } from "next/server";

import connect from "@/app/(models)/Dashmodels";
import Post from "@/app/(models)/Post";
import { Try } from "@mui/icons-material";

export const GET = async (request) => {
  try {
    await connect();
  } catch (error) {
    return new NextResponse("Error in  fetching posts" + error, {
      status: 500,
    });
  }
};

