// Post scheme to the database: the structure of the database

import mongoose from "mongoose";

const { Schema } = mongoose;

const postScheme = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    decription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postScheme);
