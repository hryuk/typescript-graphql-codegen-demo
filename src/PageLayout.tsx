import React from "react";
import { CombinedError } from "urql";
import { Container } from "@chakra-ui/react";
import { Loading } from "./Loading";

export const PageLayout: React.FC<{
  children: React.ReactNode;
  fetching: boolean;
  error?: CombinedError;
}> = ({ children, fetching, error }) => {
  return (
    <Container maxWidth="container.xl" py="4">
      <Loading loading={fetching}>
        <>
          {error && <>Error!</>}
          {children}
        </>
      </Loading>
    </Container>
  );
};
