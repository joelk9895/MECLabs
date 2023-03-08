import React from "react";
import Subs from "./Upcoming";
import { uuidv4 } from "@firebase/util";

export const Subslist = ({ upcomingSubs }) => {
  return upcomingSubs.map((upsubs) => {
    return <Subs key={uuidv4()} upsubs={upsubs} />;
  });
};
