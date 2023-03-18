import React from "react";
import { Spinner } from "@chakra-ui/react";

export const Loading: React.FC<{
  children: React.ReactElement;
  loading: boolean;
}> = ({ children, loading }) => {
  return loading ? <Spinner /> : children;
};
