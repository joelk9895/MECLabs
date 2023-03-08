import React from "react";
import AcSubs from "./Active";
import { uuidv4 } from "@firebase/util";

export const AcSubslist = ({ activeSubs }) => {
  return activeSubs.map((acsubs) => {
    return <AcSubs key={uuidv4()} acsubs={acsubs} />;
  });
};
