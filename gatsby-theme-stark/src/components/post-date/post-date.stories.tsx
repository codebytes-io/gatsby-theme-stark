import React from "react";
import PostDate from "./post-date";

export default {
  title: "Post Date",
  component: PostDate,
};

export const Default = () => <PostDate date={new Date("2020-01-01")} />;
