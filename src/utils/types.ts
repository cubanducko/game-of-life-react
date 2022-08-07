import React from "react";

export type WithCommonProps = {
  // Basic parameter for testing with @testing-library
  // https://testing-library.com/docs/queries/bytestid/
  // https://testing-library.com/docs/queries/about/#priority
  "data-testid"?: string;
};

export type WithChildren = {
  children: React.ReactNode;
};
