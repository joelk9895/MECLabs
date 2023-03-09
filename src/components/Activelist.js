import React from "react";
import AcSubs from "./Active";
import { uuidv4 } from "@firebase/util";

export const AcSubslist = ({ activeSubs }) => {
  var sumof = 0
  return activeSubs.map((acsubs) => {
    sumof += acsubs.price
    return <AcSubs key={uuidv4()} acsubs={acsubs} />;
  });
};
